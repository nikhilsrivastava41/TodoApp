import React, {useState} from 'react';
import './App.css';

function App() {
  const [todos, setTodos] = useState(['Bring some coke form the market','Bring the veggies']);
  const [input, setInput] = useState('');
  const addTodo=(event)=>{
    setTodos([...todos,input]);
  }
  return (
    <div className="App">
      <h1>hi</h1>
      <input value={input} onChange={event=> setInput(event.target.value)}/>
      <button onClick={addTodo}>Add Todo</button>
      <ul>
        {todos.map((todo)=>{
          return <li>{todo}</li>
        })}
      </ul>
    </div>
  );
}

export default App;
