import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';

const App = () => {
  const [data, setData] = useState(null);

  const getdata = async () => {
    try {
      const response = await axios.get("https://api.github.com/users/Chandermani-web");
      setData(response.data); // Only set the actual data part
      console.log(response.data);
    } catch (error) {
      console.log(`Error Occurred, Error: ${error}`);
    }
  };

  useEffect(()=>{
    getdata()
  },[])

  return (
    <div className='container'>
      {/* <button onClick={getdata}>Get GitHub Data</button> */}

      {data && (
        <div className="card">
          <img src={data.avatar_url} alt={data.login} width={150} />
          <h2>{data.name}</h2>
          <p><strong>Username:</strong> {data.login}</p>
          <p><strong>Location:</strong> {data.location}</p>
          <p><strong>Public Repos:</strong> {data.public_repos}</p>
        </div>
      )}
    </div>
  );
};

export default App;
