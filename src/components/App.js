import React from 'react';
import GlobalStyle from './globalStyles';
import DreamletControl from './DreamletControl';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '././Navbar/Navbar';
import Footer from './Footer/Footer';
import Home from './pages/Home Page/Home';
import Themes from './pages/Themes Page/Themes';
import About from './pages/About Page/About';
import Signin from "./pages/Signin Page/Signin";
import Signup from "./pages/Signup Page/Signup";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App(){
  return ( 
    <Router>
      <GlobalStyle />
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/Themes" exact component={Themes} />
        <Route path="/About" exact component={About} />
        <Route path="/Signup" exact component={Signup} />
        <Route path="/Signin" exact component={Signin} />
        <DreamletControl />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;