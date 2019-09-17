import React from 'react';

const TodoItem = ({ todo, handleChange }) => (
    <div className="todo-item">
        <input type="checkbox" checked={todo.completed} onChange={() => handleChange(todo.id)} />
        <p>{todo.text}</p>
    </div>
);

export default TodoItem;
