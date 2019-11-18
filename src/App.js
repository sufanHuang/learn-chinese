import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';

import BaseLayout from './components/BaseLayout'
import Home from './components/Home'
import Vocabulary from './components/Vocabulary'
import Books from './components/Books'
import About from './components/About'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <BaseLayout>
          <Switch>
            <Route exact path='/' component ={Home}/>
            <Route path='/vocabulary' component ={Vocabulary}/>
            <Route path='/books' component ={Books}/>
            <Route path='/about' component ={About}/>
          </Switch>
        </BaseLayout>
      </BrowserRouter>
    </div>
  );
}

export default App;
