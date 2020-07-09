import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import '../assets/index.css';

const Home = () => <h1>Rick and Morty</h1>

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={Home} />
    </Switch>
  </BrowserRouter>
);

export default App;
