import './App.css';
import {
  BrowserRouter as Router,
  Routes,Route
} from "react-router-dom";
import React from 'react';
import Home from './Components/Home';
import NetflixShow from './Components/NetflixShow';

function App() {
  return (
    <Router>
    
      <div className='App'>
      <Routes>
        <Route exact path='/' Component={Home}/>
        <Route exact path='netflix-show' Component={NetflixShow}/>
       </Routes>
      </div>
      </Router>
  );
}

export default App;
