import React, { useState, Fragment } from 'react';
import { Dropdown, Segment, Table, Grid } from 'semantic-ui-react';
import $ from "jquery";

import components from './Components';
import ComponentItem from './ComponentItem';

const keys = Array.from(components.keys());

const buildOptionFromKeys = () => {
  return keys.map(item => ({
    key: item,
    text: item,
    value: item,
  }));
}

function Population() {

  const [currentComponent, setCurrentComponent] = useState('');

  const [componentItemList, setComponentItemList] = useState([]);

  const getTableHeader = () => {
    const headerItems = Object.keys(components.get(currentComponent) || {});
    const header = headerItems.map(item => (
      <Table.HeaderCell colSpan='1' singleLine key={item}>{item}</Table.HeaderCell>
    ));
    header.push((<Table.HeaderCell key='Actions'>Actions</Table.HeaderCell>))
    return header;
  }

  const bulkData = (doc, type) => {
    const component = components.get(type) || {};
    const keys = Array.from(Object.keys(component));
    const bulkedData = keys.reduce((accumulated, current) => ({
      ...accumulated,
      [current]: $(doc).find(component[current]).toArray().map(item => item.innerHTML.trim())
    }), {});
    return bulkedData;
  }

  const buildComponents = (bulkedData, type) => {
    const component = components.get(type) || {};
    const keys = Array.from(Object.keys(component));
    const componentsList = bulkedData[keys[0]].map((item, index) => {
      return keys.reduce((accumulated, current) => ({
        ...accumulated,
        [current]: bulkedData[current][index],
      }), {});
    });
    return componentsList;
  }

  const retrieveComponents = async (type) => {
    const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
    const resourcesUrl = 'https://buildmypc.net/product/' + type;
    const componentsPage = await fetch(proxyUrl + resourcesUrl);
    const componentsText = await componentsPage.text();
    const bulkedData = bulkData(componentsText, type);
    const componentsList = await buildComponents(bulkedData, type);
    return componentsList;
  }

  const handleChangeOption = async (e, { value }) => {
    setCurrentComponent(value);
    setComponentItemList([]);
    const parsedComponents = await retrieveComponents(value);
    const componentsItems = parsedComponents.map(item => (<ComponentItem key={JSON.stringify(item)} data={item} />));
    setComponentItemList(componentsItems);
  }

  return (
    <Fragment>
      <Segment>
        <Grid columns={2}>
          <Grid.Row textAlign='justified'>
            <Grid.Column textAlign='center'>
              <p>
                Select a component type
              </p>
            </Grid.Column>
            <Grid.Column>
              <Dropdown
                placeholder="Select Component"
                fluid
                selection
                options={buildOptionFromKeys()}
                onChange={handleChangeOption}
              />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>

      <Table celled striped>
        <Table.Header>
          <Table.Row>
            {getTableHeader()}
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {componentItemList}
        </Table.Body>
      </Table>
    </Fragment>);
}

export default Population;