import React, { useState, Fragment } from 'react';
import { Dropdown, Table } from 'semantic-ui-react';

import data from '../data/data.json';


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
    price: element.price[1],
    cores: element.cores,
  }
}

const buildTableRow = ({ isChecked, name, cores, price }) => {
  return (
    <Table.Row key={name}>
      <Table.Cell>{name}</Table.Cell>
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
    const currentItems = currentComponents.map(buildTableRow);
    setComponentItemList(currentComponents.map(buildTableRow));
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

      <Table celled striped>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Name</Table.HeaderCell>
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