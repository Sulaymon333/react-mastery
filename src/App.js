import React from 'react';
import TodoItem from './TodoItem';

const App = () => (
    <>
        <h1 style={{ margin: ' 3rem 0', textAlign: 'center' }}>Awesome Todo-App</h1>
        <div className="todo-list">
            <TodoItem />
            <TodoItem />
            <TodoItem />
            <TodoItem />
        </div>
    </>
);

export default App;
