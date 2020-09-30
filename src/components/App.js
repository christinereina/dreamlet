import React from 'react';
import Header from './Header';
import DreamletControl from './DreamletControl';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '././Navbar/Navbar';
// import { Router } from "react-router-dom";


function App() {
  return (
    <React.Fragment>
      <Navbar />
        <Header />
        <DreamletControl />
    </React.Fragment>   
  );
}


export default App;