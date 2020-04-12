import React from 'react';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import MainContainer from './components/MainContainer';
import TvShowDetailsPage from './components/TvShowDetailsPage';


function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact component={MainContainer}/>
        <Route path="/tv-show-detail/:id" exact component={TvShowDetailsPage}/>
      </Switch>
      <Footer />

    </Router>
  );
}

export default App;
