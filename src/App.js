import logo from './logo.svg';
import React, { useState, useEffect } from 'react'
import './App.css';


function App() {
  // declare a new state variable, which we'll call 'count'

  const [count, setCount] = useState(0);
  const [fruit, setFruit] = useState(['banana']);
  const [todos, setTodos] = useState([{ text: 'Learn Hooks '}])

  useEffect(() => {
    document.title = `You clicked ${count} times`;
  })

  function handleFruit()  {
    fruit.push(fruit)
  }

  return (
    <React.Fragment>
    <div className="App">
      <p>You have clicked {count} times.</p>
      <button onClick={()=> setCount( count + 1 )}>Click Me</button>
      
      <p>Here is the list of fruit:</p>
      {fruit.map((fru) => 
        <li>{fru}</li>
      )}
      Fruit: {fruit}
      <br></br>
      <form>
        <input onChange={e => setFruit(e.target.value)} type="textbox"></input>
        <button onClick={()=> 
          handleFruit(fruit)
        }>Submit</button>
      </form>
      <p>Here are some todos:</p>
      {todos.map((todo) =>
        <li>{todo.text}</li>
      )}
    </div>
    </React.Fragment>
  );
}

export default App;
