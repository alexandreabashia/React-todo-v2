/* eslint-disable react-hooks/exhaustive-deps */

import { useState, useEffect } from 'react';
import './App.css';
import Form from './components/Form';
import TodoList from './components/TodoList';

function App() {

  const [inputText, setInputText] = useState("")
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);

  //Effect
  useEffect(() => {
    getLocalTodos();
    console.log('1')
  }, []);

  //Effect 2
  useEffect(() => {
    filterHandler();
    saveLocalTodos();
    console.log('2')
  }, [todos, status]);

  //LocalStorage Save 1
  function saveLocalTodos() {
    localStorage.setItem("todos", JSON.stringify(todos))
  }

  //LocalStorage Get 2
  function getLocalTodos() {
    if (localStorage.getItem("todos") === null) {
      localStorage.setItem("todos", JSON.stringify([]))
    } else {
      let todoLocal = JSON.parse(localStorage.getItem("todos"));
      setTodos(todoLocal)
    }
  }

  //Filter
  function filterHandler() {
    switch (status) {
      case 'completed':
        setFilteredTodos(todos.filter(todo => todo.completed === true))
        break;
      case 'uncompleted':
        setFilteredTodos(todos.filter(todo => todo.completed === false))
        break;
      default:
        setFilteredTodos(todos)
        break;
    }
  }


  return (
    <div className="App">
      <header>
        <h1>Todo List</h1>
      </header>
      <Form
        todos={todos}
        setTodos={setTodos}

        setInputText={setInputText}
        inputText={inputText}

        setStatus={setStatus}

        filteredTodos={filteredTodos}
        setFilteredTodos={setFilteredTodos}
      />

      <TodoList
        todos={todos}
        setTodos={setTodos}
        filteredTodos={filteredTodos}
        filterHandler={filterHandler}
      />
    </div>
  );
}

export default App;