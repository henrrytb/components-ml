import React, { useState, Fragment } from 'react';
import { Icon, Form, Table, Segment, Container} from 'semantic-ui-react';

const options = [
  { key: 'i', text: 'Ingles', value: 'ingles' },
  { key: 'e', text: 'Español', value: 'español' },
  { key: 't', text: 'Todos', value: 'todos' },
]

function Search() {
  const [criteria, setCriteria] = useState('')

  const [result, setResult] = useState('')

  const handleChange = (e, { value }) => setCriteria(value)

  const handleSubmit = () => {
    const request = `PREFIX uri: <http://www.semanticweb.org/antho/ontologies/2020/6/computer-components-ml-3#>
      PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
      PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
      
      SELECT *
      WHERE {
        ?x rdf:type uri:Component;
          rdfs:label?label.
        FILTER( REGEX(str(?label), "${criteria}","i") && LANGMATCHES(LANG(?label), "en"))
      }
      LIMIT 50`

    fetch('http://component-ml.tk:3030/ComponentsML4', {
      method: 'POST',
      headers: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      body: 'query=' + encodeURIComponent(request)
    }).then(response => response.json())
      .then(data => setResult(data))
      .catch(err => {
        console.error(err);
      });
  };

  function ParsedResult({ result }) {
    if (result) {
      return (
        <Table color='blue' key='blue' className='width-80-percent automargin'>
          <Table.Header>
            <Table.Row>
              {result.head.vars.map((title) =>
                <Table.HeaderCell>{title}</Table.HeaderCell>)}
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {result.results.bindings.map((binding) =>
              <Table.Row>{result.head.vars.map((title) =>
                <Table.Cell>{binding[title].value}</Table.Cell>)}
              </Table.Row>)}
          </Table.Body>
        </Table>)
    } else {
      return <div></div>
    }
  };

  return (
    <Fragment>
      <div style={{ padding: '20px' }}>
        <Container text> 
          <Segment raised color='blue'>       
            <Form onSubmit={handleSubmit}>        
              <Form.Group>
                <Form.Input
                  placeholder='Ingresa aqui lo que quieras buscar...'
                  name='criteria'
                  value={criteria}
                  onChange={handleChange}
                  width={8}
                  className='automargin'
                />     
                <Form.Select                                
                  fluid    
                  label=''
                  options={options}
                  placeholder=' Idioma '
                />                         
              </Form.Group>                
              <Form.Group>              
                <Form.Button className='automargin' type='submit' secondary><Icon name='search' />Buscar</Form.Button>                
              </Form.Group>
            </Form>
            <ParsedResult result={result} />
          </Segment>
        </Container>              
      </div>      
    </Fragment>
  )
}

export default Search;
