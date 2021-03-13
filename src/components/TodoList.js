import React from 'react';
import Todo from './Todo';

export default function TodoList({ todos, setTodos }) {
    
    return (
        <div>
            <div className="todo-container">
                <ul className="todo-list">
                    {
                        todos.map((todo) => {
                            return (
                                <Todo
                                    todos={todos}
                                    setTodos={setTodos}

                                    todo={todo}
                                    text={todo.text}
                                    key={todo.id} 
                                />
                            )
                        })
                    }
                </ul>
            </div>
        </div>
    )
}
