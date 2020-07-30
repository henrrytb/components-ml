import React, { useState, Fragment } from 'react';
import { Dropdown, Grid, Icon, Table } from 'semantic-ui-react';
import $ from "jquery";

import components from './Components';
import { getRequestTemplate } from './PopulationHelpers';

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

  const [componentList, setComponentList] = useState([]);
  const [componentItemList, setComponentItemList] = useState([]);

  const getTableHeader = () => {
    const headerItems = Object.keys(components.get(currentComponent) || {});
    const header = headerItems.map(item => (
      <Table.HeaderCell key={item}>{item}</Table.HeaderCell>
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

  const buildTableRow = (item) => {
    const keys = Array.from(Object.keys(item));
    const cells = keys.map(current => (<Table.Cell key={item[current]}>{item[current]}</Table.Cell>))
    cells.push((
      <Table.Cell>
        <Grid>
          <Grid.Row>
            <Icon inverted circular color='blue' name='edit' />
            <Icon inverted circular color='blue' name='cloud upload' onClick={() => populate(item)} />
          </Grid.Row>
        </Grid>
      </Table.Cell>
    ));
    return (
      <Table.Row key={item[keys[0]]}>
        {cells}
      </Table.Row>
    );
  }

  const retrieveComponents = async (type) => {
    const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
    const resourcesUrl = 'https://buildmypc.net/product/' + type;
    const componentsPage = await fetch(proxyUrl + resourcesUrl);
    const componentsText = await componentsPage.text();
    const bulkedData = bulkData(componentsText, type);
    const componentsList = await buildComponents(bulkedData, type);
    console.log(componentsList);
    return componentsList;
  }

  const handleChangeOption = async (e, { value }) => {
    setCurrentComponent(value);
    setComponentItemList([]);
    const parsedComponents = await retrieveComponents(value);
    setComponentList(parsedComponents);
    setComponentItemList(parsedComponents.map(buildTableRow));
  }

  const populate = (component) => {
    const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
    const url = "http://component-ml.tk:3030/ComponentsML-Test-Insert/update";
    const query = getRequestTemplate(component).replace(/\n/g, '');
    const body = 'update=' + encodeURIComponent(query);
    fetch(proxyUrl + url, {
      "method": "POST",
      "headers": {
        "content-type": "application/x-www-form-urlencoded;charset=UTF-8",
        "authorization": "Basic YWRtaW46YWRtaW4="
      },
      "body": body
    })
      .then(response => {
        console.log(response);
      })
      .catch(err => {
        console.error(err);
      });
  }

  return (
    <Fragment>
      <Dropdown
        placeholder="Select Component"
        fluid
        selection
        options={buildOptionFromKeys()}
        onChange={handleChangeOption}
      />

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