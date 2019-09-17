import React from 'react';

const TodoItem = ({ todo, handleChange }) => {
    const completedStyle = {
        color: '#3aaaa3',
        fontStyle: 'italic',
        textDecoration: 'line-through'
    };

    return (
        <div className="todo-item">
            <input type="checkbox" checked={todo.completed} onChange={() => handleChange(todo.id)} />
            <p style={todo.completed ? completedStyle : null}>{todo.text}</p>
        </div>
    );
};

export default TodoItem;
