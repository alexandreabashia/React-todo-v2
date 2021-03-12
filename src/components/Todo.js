import React from 'react'

export default function todo({ text, todo, todos, setTodos }) {

    function deleteHandler(){
        setTodos(todos.filter((el)=> el.id !== todo.id))
    }

    return (
        <div className="todo">
            <li className='todo-item'>{text}</li>
            <button className="complete-btn">
                <i className="fas fa-check"></i>
            </button>
            <button className="trash-btn" onClick={deleteHandler}>
            <i className="fas fa-trash"></i>
            </button>
        </div>
    )
}
