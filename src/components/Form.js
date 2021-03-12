import React from 'react'

export default function form({ todos, setTodos, inputText, setInputText }) {

    function inputTextHandler(e) {
        setInputText(e.target.value);
    }

    function submitTodoHandler(e) {
        e.preventDefault();
        setTodos([
            {
                text: inputText, completed: false, id: Math.random() * 100
            },
            ...todos
        ])
        setInputText("");
    }

    return (
        <div>
            <form>
                <input onChange={inputTextHandler} value={inputText} type="text" className="todo-input" />
                <button onClick={submitTodoHandler} className="todo-button" type="submit">
                    <i className="fas fa-plus-square"></i>
                </button>
                <div className="select">
                    <select name="todos" className="filter-todo">
                        <option value="all">All</option>
                        <option value="completed">Completed</option>
                        <option value="uncompleted">Uncompleted</option>
                    </select>
                </div>
            </form>
        </div>
    )
}
