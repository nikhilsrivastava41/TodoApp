import React, {useState, useEffect} from 'react';
import {Button, InputLabel, FormControl, Input} from '@material-ui/core';
import './App.css';
import Todo from './Todo.js';
import db from './firebase';
import firebase from 'firebase';
function App() {
  const [todos, setTodos] = useState(['']);
  const [input, setInput] = useState('');

  useEffect(() => {
    db.collection('todos').orderBy('timestamp','desc').onSnapshot(snapshot => {
      setTodos(snapshot.docs.map(doc => ({id: doc.id, todo: doc.data().todo})))
    })
  }, [])
  const addTodo=(event)=>{
    event.preventDefault();
    db.collection('todos').add({
      todo: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    // setTodos([...todos,input]);
    setInput('');   //setting the input variable to be blank again after adding it to the array of todos
  }
  return (
    <div className="App">
      <h1>TODO APP</h1>
      
      <form>
      <FormControl>
        <InputLabel>
          Write A Todo
        </InputLabel>
        <Input value={input} onChange={event=> setInput(event.target.value)}/>
      </FormControl>
      <Button disabled={!input} type="submit" onClick={addTodo} variant="contained" color="secondary">
        Add Todo
      </Button>
      </form>
      <ul>
        {todos.map((todo)=>{
          return <Todo text={todo}/>
        })}
      </ul>
    </div>
  );
}

export default App;
