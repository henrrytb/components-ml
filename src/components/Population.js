import React, { useState, Fragment } from 'react';
import { Segment, Table, Form, Container, Divider } from 'semantic-ui-react';
import $ from "jquery";

import {components, buildPCUrls} from '../parser/ComponentMap';
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
        [current]: {
          en: bulkedData[current][index],
          es: bulkedData[current][index],
        }
      }), {});
    });
    return componentsList;
  }

  const retrieveComponents = async (type) => {
    const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
    const resourcesUrl = 'https://buildmypc.net/product/' + buildPCUrls[type];
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
    const componentsItems = parsedComponents.map(item => (<ComponentItem key={JSON.stringify(item)} data={item} type={value}/>));

    setComponentItemList(componentsItems);
  }

  return (
    <Fragment>
      <div style={{ padding: '20px' }}>
        <Container text>
          <Segment raised color='blue'>
            <Form>
              <Form.Group>
                <Form.Select
                  label='Selecciona el tipo de componente:'
                  options={buildOptionFromKeys()}
                  onChange={handleChangeOption}
                  className='automargin'
                  placeholder='--No seleccionado--'
                />
              </Form.Group>
            </Form>
          </Segment>
        </Container>
      </div>
      <Divider clearing />
      <Container>
        <div className='scroll_horizontal'>
          <Table celled>
            <Table.Header>
              <Table.Row>
                {getTableHeader()}
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {componentItemList}
            </Table.Body>
          </Table>
        </div>
      </Container>
    </Fragment>);
}

export default Population;