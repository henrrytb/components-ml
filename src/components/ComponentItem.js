import React, { useState } from 'react';
import { Grid, Icon, Input, Table } from 'semantic-ui-react';
import { populate } from './PopulationHelpers';

const buildMultilingualComponent = (component) => {
  const data = {
    ...component,
    nameEs: `${component.Brand} ${component.Model}`,
    nameEn: `${component.Brand} ${component.Model}`,
  }
  delete data.Name;
  return data;
}

function ComponentItem({ data: item = {} }) {

  const [isDisable, setIsDisable] = useState(true);
  const [component, setComponent] = useState(buildMultilingualComponent(item));

  const handleIsDisable = () => {
    setIsDisable(!isDisable);
  }

  const handleOnChange = (attribute, value) => {
    const data = {
      ...component,
      [attribute]: value,
    }
    setComponent(data);
  }

  const buildCells = () => {
    delete item.Name;
    const keys = Array.from(Object.keys(item));
    let innerCells = [];
    innerCells.push(
      <Table.Cell key='MultilingualName'>
        <Input disabled={isDisable} label='En' defaultValue={component.nameEn} onChange={(e, { value }) => handleOnChange('nameEn', value)} />
        <Input disabled={isDisable} label='Es' defaultValue={component.nameEs} onChange={(e, { value }) => handleOnChange('nameEs', value)} />
      </Table.Cell>
    );
    keys.forEach(current => {
      innerCells.push(
        <Table.Cell key={component[current]}>
          <Input disabled={isDisable} defaultValue={component[current]} onChange={(e, { value }) => handleOnChange(current, value)} />
        </Table.Cell>
      );
    });
    innerCells.push((
      <Table.Cell>
        <Grid>
          <Grid.Row>
            <Icon inverted circular color='blue' name='edit' onClick={() => handleIsDisable()} />
            <Icon inverted circular color='blue' name='cloud upload' onClick={() => populate(component)} />
          </Grid.Row>
        </Grid>
      </Table.Cell>
    ));
    console.log(innerCells)
    return innerCells;
  }

  return (
    <Table.Row key={item.Name}>
      {buildCells()}
    </Table.Row>
  );
}

export default ComponentItem;