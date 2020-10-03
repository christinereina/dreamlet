import React from 'react';
import GlobalStyle from './globalStyles';
import Header from './Header';
import DreamletControl from './DreamletControl';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '././Navbar/Navbar';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App(){
  return ( 
    <Router>
      <GlobalStyle />
      <Navbar />
      <Header />
      <Switch>
        <Route path="/signin">
          {/* <Signin /> */}
        </Route>
        <Route path="/">
          <DreamletControl />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;