import React from 'react';

const TodoItem = ({ todo }) => (
    <div className="todo-item">
        <input type="checkbox" checked={todo.completed} />
        <p>{todo.text}</p>
    </div>
);

export default TodoItem;
