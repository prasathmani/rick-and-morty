import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Loader from 'components/Loader';

import 'assets/index.scss';
const Home = lazy(() => import('pages/Home'));
const NotFound = lazy(() => import('pages/NotFound'));
const Header = lazy(() => import('components/Header'));
const Footer = lazy(() => import('components/Footer'));
const CharacterPage = lazy(() => import('pages/CharacterPage'));

const App = () => (
  <BrowserRouter>
    <Suspense fallback={<Loader />}>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/character/:characterId" component={CharacterPage} />
        <Route component={NotFound} />
      </Switch>
      <Footer />
    </Suspense>
  </BrowserRouter>
);

export default App;
