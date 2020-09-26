import React from 'react';
import Header from './Header';
import DreamletControl from './DreamletControl';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <React.Fragment>
        <Header />
        <DreamletControl />
    </React.Fragment>
  );
}


export default App;