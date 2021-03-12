import React from 'react'

export default function todo() {
    return (
        <div className="todo">
            <li className='todo-item'>Todo item 1</li>
            <button className="complete-btn">
                <i className="fas fa-check"></i>
            </button>
            <button className="trash-btn">
            <i className="fas fa-trash"></i>
            </button>
        </div>
    )
}
