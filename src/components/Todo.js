import React from 'react'

export default function todo({ todos, setTodos, todo, text }) {

    function deleteHandler() {
        setTodos(todos.filter((el) => el.id !== todo.id))
    }

    function completeHandler() {
        //   setTodos(todos.map(item => {
        //       return item.id === todo.id ? {...item, item.completed = !item.completed}
        //   }))
        setTodos(todos.map(item => {
            if (item.id === todo.id) {
                return { ...item, completed: !item.completed }
            }
            return todo;
        }))
    }

    return (
        <div className="todo">
            <li className='todo-item'>{text}</li>
            <button className="complete-btn" onClick={completeHandler}>
                <i className="fas fa-check"></i>
            </button>
            <button className="trash-btn" onClick={deleteHandler}>
                <i className="fas fa-trash"></i>
            </button>
        </div>
    )
}
