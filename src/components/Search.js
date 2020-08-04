import React, { useState, Fragment } from 'react';
import { Icon, Form, Table, Segment, Container, Divider } from 'semantic-ui-react';
import { components } from '../parser/ComponentMap';

const options = [
  { key: '1', text: 'Ingles', value: 'en' },
  { key: '2', text: 'Español', value: 'es' },
  { key: '3', text: 'Todos', value: 'todos' },
]

const typeOptions = [
  { key: '1', text: 'Internal Component', value: 'InternalComponent' },
  { key: '2', text: 'External Component', value: 'ExternalComponent' },
  { key: '3', text: 'CPU', value: 'CPU' },
  { key: '4', text: 'Mouse', value: 'Mouse' },
  { key: '5', text: 'Keyboard', value: 'Keyboard' },
  { key: '6', text: 'Monitor', value: 'Monitor' },
  { key: '7', text: 'Motherboard', value: 'Motherboard' },
  { key: '8', text: 'Video Card', value: 'Video Card' },
  { key: '9', text: 'Component', value: 'Component' },
]

function Search() {
  const [criteria, setCriteria] = useState('');
  const [language, setLanguage] = useState('todos');
  const [type, setType] = useState('Component');

  const [result, setResult] = useState('');

  const handleChangeCriteria = (e, { value }) => setCriteria(value);
  const handleChangeLanguage = (e, { value }) => setLanguage(value);
  const handleChangeType = (e, { value }) => setType(value);

  const getLanguageTag = () => language === 'todos' ? '' : ` && LANGMATCHES(LANG(?name), "${language}")`;

  const buildQueryBody = () => {
    const properties = Object.keys(components.get(type) || {});
    switch (type) {
      case 'InternalComponent':
      case 'ExternalComponent':
        return `SELECT ?Name ?Price
        WHERE {
          ?x rdfs:subClassOf uri:${type} .
          ?y rdf:type ?x.
          ?y uri:Name?Name.
          ?y uri:Price?Price.
          FILTER( REGEX(str(?Name), "${criteria}","i")${getLanguageTag()} ).
        }`;
      case 'Component':
        return `SELECT ?Name ?Price
        WHERE {  
          { 
            ?x rdfs:subClassOf uri:ExternalComponent .
            ?y rdf:type ?x.
            ?y uri:Name?Name.
            ?y uri:Price?Price.
            FILTER( REGEX(str(?Name), "${criteria}","i")${getLanguageTag()} ).
          } 
          UNION 
          { 
            ?x rdfs:subClassOf uri:InternalComponent .
            ?y rdf:type ?x.
            ?y uri:Name?Name.
            ?y uri:Price?Price.
            FILTER( REGEX(str(?Name), "${criteria}","i")${getLanguageTag()} ).
          }  
        }`;
      default:
        return `SELECT DISTINCT ${properties.map(property => `?${property}`).join(' ')}
        WHERE {
          ?x rdf:type uri:${type};
            ${properties.map(property => `uri:${property}?${property}`).join('; ')}
          FILTER( REGEX(str(?Name), "${criteria}","i") ).
          ${language === 'todos' ? '' : properties.map(property => ` FILTER ( LANG(?${property}) = "${language}" )`).join('. ')}
        }`;
    }
  }

  const handleSubmit = () => {
    const request = `
      PREFIX uri: <http://www.semanticweb.org/antho/ontologies/2020/6/computer-components-ml-3#>
      PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
      PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>

      ${buildQueryBody()}`

    fetch('http://component-ml.tk:3030/components/sparql', {
      method: 'POST',
      headers: {
        'content-type': 'application/x-www-form-urlencoded;charset=UTF-8'
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
        <Container>
          <div className='scroll_horizontal'>
            <Table key='blue'>
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
            </Table>
          </div>
        </Container>)
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
              <Form.Select
                  label='Tipo:'
                  options={typeOptions}
                  value={type}
                  placeholder='Tipo'
                  onChange={handleChangeType}
                />
                <Form.Input
                  label='Crietrio de busqueda:'
                  placeholder='Ingresa aqui lo que quieras buscar...'
                  name='criteria'
                  value={criteria}
                  onChange={handleChangeCriteria}
                  width={10}
                  className='automargin'
                />
                <Form.Select
                  label='Lenguaje:'
                  options={options}
                  value={language}
                  placeholder='Idioma'
                  onChange={handleChangeLanguage}
                />
              </Form.Group>
              <Form.Group>
                <Form.Button className='automargin' type='submit' secondary><Icon name='search' />Buscar</Form.Button>
              </Form.Group>
            </Form>
          </Segment>
        </Container>
        <Divider clearing />
        <ParsedResult result={result} />
      </div>
    </Fragment>
  )
}

export default Search;
