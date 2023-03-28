import React from 'react';
import {Routes,Route} from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Card from "./components/card/Card"

function App() {
  return (
        <div>
          <div className="wave"></div>
          <div className="wave"></div>
          <div className="wave"></div>
          <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/card/:id" element={<Card/>} />
          </Routes>
        </div>    
);
}

export default App;
