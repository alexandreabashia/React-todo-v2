import { useState } from 'react';
import './App.css';
import Form from './components/Form';
import TodoList from './components/TodoList';

function App() {

  const [inputText, setInputText] = useState("")
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");

  return (
    <div className="App">
      <header>
        <h1>Todo List</h1>
      </header>
      <Form todos={todos} setTodos={setTodos} setInputText={setInputText} inputText={inputText} status={status} setStatus={setStatus} />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;

 
// https://youtu.be/pCA4qpQDZD8?t=3844