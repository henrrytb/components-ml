import React, { useState } from 'react';
import { Button, Grid, Input, Table} from 'semantic-ui-react';
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

  const handleSave = (item) => {
    populate(item);
  }

  const buildCells = () => {
    delete item.Name;
    const keys = Array.from(Object.keys(item));
    let innerCells = [];
    innerCells.push(            
      <Table.Cell key='MultilingualName'>
        <Grid columns={1}>
          <Grid.Row>
            <Grid.Column>
              <Input disabled={isDisable} label='En' defaultValue={component.nameEn} onChange={(e, { value }) => handleOnChange('nameEn', value)} />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column>
              <Input disabled={isDisable} label='Es' defaultValue={component.nameEs} onChange={(e, { value }) => handleOnChange('nameEs', value)} />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Table.Cell>      
    );
    keys.forEach(current => {
      innerCells.push(      
        <Table.Cell key={component[current]}>
          <Input size="mini" disabled={isDisable} defaultValue={component[current]} onChange={(e, { value }) => handleOnChange(current, value)} />
        </Table.Cell>    
      );
    });
    innerCells.push((      
      <Table.Cell key="Actions">
        <Grid columns={2}>
          <Grid.Row>
            <Grid.Column>
              <Button basic color='blue' icon='edit' onClick={() => handleIsDisable()} />
            </Grid.Column>
            <Grid.Column>
              <Button basic color='blue' icon='cloud upload' onClick={() => handleSave(component)} />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Table.Cell>      
    ));
    return innerCells;
  }

  return (    
    <Table.Row key={item.Name}>
      {buildCells()}
    </Table.Row>
  );
}

export default ComponentItem;