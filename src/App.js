import React, { useState } from 'react';
import './App.css';

const Todo = ({ todo, index, completeTodo, deleteTodo }) => {
    return (
        <div className="todo">
            <span style={{ 'text-decoration': todo.isComplete ? 'line-through' : '' }}>{todo.text}</span>
            <div>
                <button onClick={() => completeTodo(index)}>Completed</button>{' '}
                <button onClick={() => deleteTodo(index)}>Delete</button>
            </div>
        </div>
    );
};

const TodoForm = ({ addTodo }) => {
    const [value, setValue] = useState('');

    const handleChange = e => setValue(e.target.value);
    const handleSubmit = e => {
        e.preventDefault();
        if (!value) return;
        addTodo(value);
        setValue('');
    };

    return (
        <form onSubmit={handleSubmit} className="form">
            <input type="text" className="input" value={value} placeholder="Add Todo..." onChange={handleChange} />
        </form>
    );
};
function App() {
    const [todos, setTodos] = useState([
        {
            text: 'I wanna learn react hooks',
            isComplete: false
        },
        {
            text: 'I wanna learn react router',
            isComplete: true
        },
        {
            text: 'I wanna learn something cool',
            isComplete: false
        },
        {
            text: 'I wanna build and amazing voting app',
            isComplete: false
        }
    ]);

    const addTodo = text => {
        const newTodos = [...todos, { text }];
        setTodos(newTodos);
    };

    const completeTodo = index => {
        const newTodos = [...todos];
        newTodos[index].isComplete = true;
        setTodos(newTodos);
    };
    const deleteTodo = index => {
        const newTodos = [...todos];
        newTodos.splice(index, 1);
        setTodos(newTodos);
    };

    return (
        <div className="app">
            <TodoForm addTodo={addTodo} />
            <div className="todo-list">
                {todos.map((todo, index) => (
                    <Todo key={index} index={index} todo={todo} completeTodo={completeTodo} deleteTodo={deleteTodo} />
                ))}
            </div>
        </div>
    );
}

export default App;
