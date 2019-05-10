import React from 'react';
import Main from './Components/Main';
import Counter from './Components/Counter';
import Login from './Components/Login';
import AddTodo from './Components/AddTodo';
import AddUser from './Components/AddUser';

function App() {
  return (
    <div>
      <Main />
      <hr />
      <h3>Counter system</h3>
      <Counter />
      <hr />
      <h3>Login system</h3>
      <Login />
      <hr />
      <h3>Todo System</h3>
      <AddTodo />
      <hr />
      <h3>Form data collection</h3>
      <AddUser />
    </div>
  );
}

export default App;
