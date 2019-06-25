import React, { useState } from 'react';
import './App.css';

const Todo = ({ todo, index }) => {
    return <div className="todo">{todo.text}</div>;
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
        <form onSubmit={handleSubmit}>
            <input type="text" className="input" value={value} onChange={handleChange} />
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

    return (
        <div className="app">
            {todos.map((todo, index) => (
                <Todo key={index} index={index} todo={todo} />
            ))}
            <TodoForm addTodo={addTodo} />
        </div>
    );
}

export default App;
