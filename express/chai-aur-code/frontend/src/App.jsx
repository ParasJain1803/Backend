import React, { useEffect, useState } from 'react'
import axios from 'axios';


function App() {
  const [jokes, setJokes] = useState([]);
  useEffect(() => {
    axios.get('/api/jokes')
    .then((res) =>{
      setJokes(res.data);
      console.log(res.data);
      
    })
    .catch((error) => {
      console.log(error);
    });
  }, [])

  return (
    <div>
      <h1>hehe</h1>
      <p>JOKES: {jokes.length} </p>
      {
        jokes.map((joke, index) => {
          return <div key={joke.id}>
            <p>{joke.joke}</p>
          </div>
        })
      }
    </div>
  )
} 

export default App
