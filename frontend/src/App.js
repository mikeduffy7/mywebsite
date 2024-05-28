import React, { useState, useEffect } from 'react';
import Navbar from './Navbar.js';
import axios from 'axios';

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
    <div>
      <Navbar />
      <h1>{data ? data.message : 'Loading...'}</h1>
      <button onClick={postData}>Send Data</button>
    </div>
  );
}

export default App;
