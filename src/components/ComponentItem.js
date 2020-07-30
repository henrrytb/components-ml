import React, { useState } from 'react';
import { Grid, Icon, Table } from 'semantic-ui-react';
import { populate } from './PopulationHelpers';

function ComponentItem({ data: item = {} }) {

  const [isEditing, setIsEditing] = useState(false);

  const keys = Array.from(Object.keys(item));

  const handleIsEditing = () => {
    buildCells();
  }

  const buildCells = () => {
    let innerCells = [];
    innerCells = keys.map(current => (<Table.Cell key={item[current]}>{item[current]}</Table.Cell>))
    innerCells.push((
      <Table.Cell>
        <Grid>
          <Grid.Row>
            <Icon inverted circular color='blue' name='edit' onClick={() => handleIsEditing()} />
            <Icon inverted circular color='blue' name='cloud upload' onClick={() => populate(item)} />
          </Grid.Row>
        </Grid>
      </Table.Cell>
    ));
    return innerCells;
  }

  return (
    <Table.Row key={item[keys[0]]}>
      {buildCells()}
    </Table.Row>
  );
}

export default ComponentItem;