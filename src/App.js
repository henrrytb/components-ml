import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Document from './components/Document';
import Search from './components/Search';

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
          <div>POPULAR DATOS</div>
        </Route>
      </Switch>


    </BrowserRouter >
  );
}

export default App;
