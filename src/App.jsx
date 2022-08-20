import React from "react";
import {Routes,Route} from 'react-router-dom'
import Hello from './components/Hello'
import { useNavigate } from 'react-router-dom';
import $ from 'jquery'

function App() {
  return (
    <div>

      
      <Routes>
        <Route path="/" element={ <Hello/>}></Route>
        <Route path="/projects" element={ <Hello/>}></Route>
      </Routes>
        
    </div>
  );
}

export default App;