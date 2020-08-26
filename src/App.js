import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import './App.css'; 
import Home from './components/index';
import { Link } from 'react-router-dom';


function App() {
  return (
    <CssBaseline>
      <Home />
    </CssBaseline>
  );
}

export default App;
