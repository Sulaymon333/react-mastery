import React from 'react';

import ReactDOM from 'react-dom';

const root = document.getElementById('root');

const Header = props => {
  console.log(props);

  return (
    <header>
      <h1>{props.title}</h1>

      <p>Year:{props.year}</p>

      <p>{props.children}</p>
    </header>
  );
};

const LayOut = props => {
  return (
    <div>
      <p>{props.children}</p>
    </div>
  );
};

const Main = () => {
  return (
    <main>
      <LayOut>Section one layout</LayOut>

      <LayOut>Section two layout</LayOut>

      <LayOut>Section three layout</LayOut>

      <Header title="Everyobdy is enjoying React" year={new Date().getFullYear()}>
        I can add text in here and I will be accessed as a child propps
      </Header>
    </main>
  );
};

const Greeting = () => {
  return (
    <div>
      <h1>Welcome, Asabeneh</h1>
    </div>
  );
};

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,

      isLoggedIn: false,

      name: 'Asabeneh',

      todos: ['Item 1', 'Item 2', 'Item 3'],

      todo: ''
    };

    this.handleAdd = this.handleAdd.bind(this);
    this.handleMinus = this.handleMinus.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
  }

  handleAdd() {
    this.setState(prevState => ({ count: prevState.count + 1 }));
  }

  handleMinus() {
    if (this.state.count > 0) {
      this.setState(prevState => ({ count: prevState.count - 1 }));
    }
  }

  handleLogin() {
    this.setState({
      isLoggedIn: !this.state.isLoggedIn
    });
  }

  handleChange(e) {
    this.setState({
      todo: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();

    this.setState(prevState => ({
      todos: [this.state.todo, ...prevState.todos]
    }));

    this.setState({
      todo: ''
    });
  }

  render() {
    const { isLoggedIn, count, todos } = this.state;

    const status = isLoggedIn ? 'LOGOUT' : 'LOGIN';

    const todoList = todos.map(todo => <li key={'key' + todo}>{todo}</li>);

    return (
      <div>
        <h4>{this.state.todo}</h4>

        <form onSubmit={this.handleSubmit}>
          <input type="text" name="todo" value={this.state.todo} placeholder="Task" onChange={this.handleChange} />

          <button>Add Todo</button>
        </form>

        <ul>{todoList}</ul>

        <h1>Count:{count}</h1>

        <button onClick={this.handleAdd}>Add One</button>

        <button onClick={this.handleMinus}>Minus One</button>

        <p>Please {status} </p>

        <button onClick={this.handleLogin}>{status}</button>

        {isLoggedIn && <Greeting />}
      </div>
    );
  }
}

ReactDOM.render(<App />, root);
