import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import { Home } from './pages/Home';
import { internetOffer } from './pages/internetOffer';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={ Home } />
        <Route path='/internetOffers' component={ internetOffer } />
      </Switch>
    </div>
  );
}

export default App;
