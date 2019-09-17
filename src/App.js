import React from 'react';
import TodoItem from './TodoItem';
import todosData from './todosData';

const App = () => {
    const todoItems = todosData.map(todo => <TodoItem key={todo.id} todo={todo} />);
    return (
        <>
            <h1 style={{ margin: ' 3rem 0', textAlign: 'center' }}>Awesome Todo-App</h1>
            <div className="todo-list">{todoItems}</div>
        </>
    );
};

export default App;
