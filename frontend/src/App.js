import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import Navbar from './components/Navbar.js';
import { Routes, Route } from 'react-router-dom';
//import Home from './pages/Home.js';
//import Breakdowns from './components/Breakdowns.js';
import Resources from './components/Resources.js';

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios.get('http://127.0.0.1:5000/api/data')
      .then(response => setData(response.data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const postData = () => {
    axios.post('http://127.0.0.1:5000/api/data', { message: 'Hello from React!' })
      .then(response => console.log(response.data))
      .catch(error => console.error('Error posting data:', error));
  };

  return (
      <div className='App'>
        <h1 className='title'>The House That Horror Built</h1>
        <Navbar />
        <Routes>
          <Route path="/resources" element={<Resources/>} />
        </Routes>
      </div>
  );
}

export default App;