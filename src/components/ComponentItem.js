import React, { useState } from 'react';
import { Button, Input, Table, Segment, Divider } from 'semantic-ui-react';
import { populate } from '../parser/PopulationHelpers';

function ComponentItem({ data: item = {}, type }) {

  const [isDisable, setIsDisable] = useState(true);
  const [component, setComponent] = useState(item);

  const handleIsDisable = () => {
    setIsDisable(!isDisable);
  }

  const handleOnChange = (attribute, value, language) => {
    const temp = {
      ...component[attribute], 
      [language]: value
    };
    console.log(temp)
    const data = {
      ...component,
      [attribute]: temp,
    }
    setComponent(data);
  }

  const handleSave = (item) => {
    populate(item, type);
  }

  const buildCells = () => {
    const keys = Array.from(Object.keys(item));
    let innerCells = [];

    keys.forEach(current => {

      innerCells.push(
        <Table.Cell key={JSON.stringify(component[current])}>
          <Segment basic textAlign='center'>
            <Divider horizontal>Ingles</Divider>
            <div>
              {isDisable
                ? <div>{component[current].en}</div>
                : <Input value={component[current].en} onChange={(e, { value }) => handleOnChange(current, value, 'en')} />
              }
            </div>
            <Divider horizontal>Español</Divider>
            <div>
              {isDisable
                ? <div>{component[current].en}</div>
                : <Input value={component[current].es} onChange={(e, { value }) => handleOnChange(current, value, 'es')} />
              }
            </div>
          </Segment>
        </Table.Cell>
      );
    });
    innerCells.push((
      <Table.Cell key="Actions">
        <Segment.Inline>
          <Button secondary icon='edit' onClick={() => handleIsDisable()} />
          <Button secondary icon='cloud upload' onClick={() => handleSave(component)} />
        </Segment.Inline>
      </Table.Cell>
    ));
    return innerCells;
  }

  return (
    <Table.Row key={JSON.stringify(item.Name)}>
      {buildCells()}
    </Table.Row>
  );
}

export default ComponentItem;