import React, { useState, useEffect } from 'react';
import './App.css';
import { Button, InputLabel, Input, FormControl } from '@material-ui/core';
import ToDo from './ToDo';
import db from './firebase';

function App() {

  const [todos, setTodos ] = useState([]);
  const [input, setInput] = useState('abc', 'def');

  //at the time of load, connect to database to fetch and remove
  useEffect(() => {
    //this code fires the database when app is loaded
    db.collection('todos').onSnapshot(snapshot => {
      setTodos(snapshot.docs.map(doc => doc.data().todo))
    })
  },[]);

  const addTodo = (event) => {
    event.preventDefault();
    db.collection('todos').add({
      todo: input
    })
    // setTodos([...todos, input]);
    setInput('');
  }

  return (
    <div className="App">
      <h1>My To Do App via Firebase!!</h1>
      <form>
        {/* <input  /> */}
        <FormControl>
          <InputLabel htmlFor="my-input">Write your ToDos here..</InputLabel>
          <Input value={input} onChange={event => setInput(event.target.value)}/>
        </FormControl>
        <Button disabled = {!input} variant="contained" color="secondary" type="submit" onClick={addTodo}>
          Add here!!
        </Button>
        {/* <button >Add here!</button> */}
      </form>

      <ul>
        {todos.map(todo => (
          <ToDo todo={todo}/>
          // <li>{todo}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
