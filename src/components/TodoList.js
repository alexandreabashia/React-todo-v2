import React from 'react';
import Todo from './Todo';

export default function TodoList() {
    return (
        <div>
            <div className="todo-container">
                <ul className="todo-list">
                    <Todo />
                    <Todo />
                    <Todo />
                    <Todo />
                    <Todo />
                </ul>
            </div>
        </div>
    )
}
