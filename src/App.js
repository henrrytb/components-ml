import React, { useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Document from './components/Document';
import Search from './components/Search';
import Population from './components/Population';

import './styles/App.css';

import { Icon, Form, Table } from 'semantic-ui-react';
import $ from "jquery";

function App() {

  const [result, setResult] = useState('')

  const handleSubmit = () => {
    const proxyUrl = 'https://cors-anywhere.herokuapp.com/';

    fetch(proxyUrl + 'https://buildmypc.net/product/processor', {
      method: 'GET',
    }).then(response => response.text())
      .then(data => {

        const html = document.createElement("div");
        html.innerHTML = data;

        const labels = $(html).find('table td div.table_title a').toArray().map(item => item.innerText.trim());
        const brands = $(html).find('table td div.f_brand').toArray().map(item => item.innerText.trim());
        const models = $(html).find('table td div.f_model').toArray().map(item => item.innerText.trim());
        const speeds = $(html).find('table td div.f_speed').toArray().map(item => item.innerText.trim());
        const cores = $(html).find('table td div.f_cores').toArray().map(item => item.innerText.trim());
        const sockets = $(html).find('table td div.f_socket_type').toArray().map(item => item.innerText.trim());
        const prices = $(html).find('table>tbody>tr>td:nth-child(4)').toArray().map(item => item.innerText.trim());


        var parsed = labels.reduce((rdf, label, i) => {
          const iri = label.split(' ').join('_').split(',').join('_').split('.').join('_').split('(').join('_').split(')').join('_');
          return `${rdf}
computer-components-ml-3:${iri}
          a                               computer-components-ml-3:Component , owl:NamedIndividual ;
          rdfs:label                      "${label}"@en , "${label}"@es ;
          computer-components-ml-3:Name   "${label}"@en , "${label}"@es ;
          computer-components-ml-3:Price  "${prices[i]}" ;
          computer-components-ml-3:Model  "${models[i]}" ;
          computer-components-ml-3:Speed  "${speeds[i]}" ;
          computer-components-ml-3:Cores  "${cores[i]}" ;
          computer-components-ml-3:Socket  "${sockets[i]}" ;
          computer-components-ml-3:isManufacturedBy
          computer-components-ml-3:${brands[i]} .`;
        }, '');

        
        setResult(parsed);
      })
      .catch(err => {
        console.error(err);
      });
  };

  return (
    <BrowserRouter>

      <Navbar />

      <Switch>
        <Route exact path='/'>
          <Document />
        </Route>

        <Route exact path='/buscar'>
          <Search />
        </Route>

        <Route exact path='/popular'>
          <Population />
        </Route>

        <Route exact path='/test'>
          <Form onSubmit={handleSubmit}>

            <Form.Group>
              <Form.Input
                placeholder='Ingresa aqui lo que quieras buscar...'
                name='criteria'
                
                width={8}
                className='automargin'
              />
            </Form.Group>

            <Form.Group>
              <Form.Button className='automargin' type='submit' secondary><Icon name='search' />Buscar</Form.Button>
            </Form.Group>
          </Form>

          <pre>{result}</pre>

        </Route>
      </Switch>


    </BrowserRouter >
  );
}

export default App;
