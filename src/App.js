import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Document from './components/Document';
import Search from './components/Search';
import Population from './components/Population';

import './styles/App.css';

function App() {

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
      </Switch>


    </BrowserRouter >
  );
}

export default App;
