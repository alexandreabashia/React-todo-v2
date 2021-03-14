import React from 'react'

export default function form({ todos, setTodos, inputText, setInputText, status, setStatus, filteredTodos, setFilteredTodos }) {

    //1. Runs on: everytime i enter text
    function inputTextHandler(e) {
        setInputText(e.target.value);
    }

    
    //2. Runs on: + Button click
    function submitTodoHandler(e) {
        e.preventDefault();
        setTodos([
            ...todos,
            {
                text: inputText, completed: false, id: Math.random() * 1000
            }
        ])
        setInputText("");
    }

    //3. Runs on: SELECT OPTION
    function statusHandler(e){
        // setStatus(e.target.value)

        setFilteredTodos(todos);
        if (e.target.value === 'completed') {
            setFilteredTodos(filteredTodos.filter(item => {
                return item.completed === true;
            }))
        } else if (e.target.value === 'uncompleted') {
            setFilteredTodos(filteredTodos.filter(item => {
                return item.completed === false;
            }))
        }
    }

    return (
        <div>
            <form>
                <input onChange={inputTextHandler} value={inputText} type="text" className="todo-input" />
                <button onClick={submitTodoHandler} className="todo-button" type="submit">
                    <i className="fas fa-plus-square"></i>
                </button>
                <div className="select">
                    <select name="todos" onChange={statusHandler} className="filter-todo">
                        <option value="all">All</option>
                        <option value="completed">Completed</option>
                        <option value="uncompleted">Uncompleted</option>
                    </select>
                </div>
            </form>
        </div>
    )
}
