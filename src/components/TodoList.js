import React from 'react';
import Todo from './Todo';

export default function TodoList({ todos }) {
    return (
        <div>
            <div className="todo-container">
                <ul className="todo-list">
                    {
                        todos.map((todo) => {
                            return <Todo todo={todo.text} key={todo.id} />
                        })
                    }
                </ul>
            </div>
        </div>
    )
}
