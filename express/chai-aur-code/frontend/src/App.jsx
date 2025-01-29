import React, { useState } from 'react'

function App() {
  const [jokes, setJokes] = useState([])
  return (
    <div>
      <h1>hehe</h1>
      <p>JOKES: {jokes.length} </p>
      {
        jokes.map((joke, index) => {
          <div key={joke.id}>
            <p>{joke.content}</p>
          </div>
        })
      }
    </div>
  )
}

export default App
