import React from 'react';
import './App.css';
import Nav from './components/Nav';
import Resume from './components/Resume';
import UploadFile from './components/UploadFile';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" element={<UploadFile />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
        
      </div>
    </Router>
  );
}

export default App;

