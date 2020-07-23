import React, { useState, Fragment } from 'react';
import { Button, Dropdown, Table } from 'semantic-ui-react';

import data from '../data/data.json';
import { getRequestTemplate } from './PopulationHelpers';

const componentOptions = [
  {
    key: 'cpu',
    text: 'cpu',
    value: 'cpu',
  },
  {
    key: 'motherboard',
    text: 'motherboard',
    value: 'motherboard',
  },
  {
    key: 'videoCard',
    text: 'videoCard',
    value: 'videoCard',
  },
  {
    key: 'mouse',
    text: 'mouse',
    value: 'mouse',
  },
  {
    key: 'keyboard',
    text: 'keyboard',
    value: 'keyboard',
  },
  {
    key: 'monitor',
    text: 'monitor',
    value: 'monitor',
  },
]

const mapItems = element => {
  return {
    name: element.brand + ' ' + element.model,
    brand: element.brand,
    price: element.price[1],
    cores: element.cores,
  }
}

const buildTableRow = ({ name, brand, cores, price }) => {
  return (
    <Table.Row key={name}>
      <Table.Cell>{name}</Table.Cell>
      <Table.Cell>{brand}</Table.Cell>
      <Table.Cell>{cores}</Table.Cell>
      <Table.Cell>{price}</Table.Cell>
    </Table.Row>
  )
}

function Population() {

  const [componentList, setComponentList] = useState([]);
  const [componentItemList, setComponentItemList] = useState([]);

  const handleChangeOption = (e, { value }) => {
    console.log(value)
    const currentComponents = data[value].map(mapItems);
    setComponentList(currentComponents);
    setComponentItemList(currentComponents.map(buildTableRow));
  }

  const populate = () => {
    const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
    const url = "http://component-ml.tk:3030/ComponentsML-2/update";
    const request = getRequestTemplate(componentList[0]);
    console.log(request)
    fetch(proxyUrl + url, {
      "method": "POST",
      "headers": {
        "content-type": "application/x-www-form-urlencoded",
        "authorization": "Basic YWRtaW46YWRtaW4="
      },
      "body": {
        "update": request
      }
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
        options={componentOptions}
        onChange={handleChangeOption}
      />

      <Button primary onClick={populate}>Populate</Button>

      <Table celled striped>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Name</Table.HeaderCell>
            <Table.HeaderCell>Brand</Table.HeaderCell>
            <Table.HeaderCell>Cores</Table.HeaderCell>
            <Table.HeaderCell>Price</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {componentItemList}
        </Table.Body>
      </Table>
    </Fragment>);
}

export default Population;