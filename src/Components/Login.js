import React, { Component } from 'react';
import Greeting from './Greeting';

class Login extends Component {
  state = {
    isLoggedIn: false
  };

  handleLogin = () => {
    this.setState({
      isLoggedIn: !this.state.isLoggedIn
    });
  };

  render() {
    const { isLoggedIn } = this.state;
    const status = isLoggedIn ? 'Logout' : 'Login';
    return (
      <div>
        <p>
          Please {status} {status === 'Logout' ? 'out of' : 'into'} your account
        </p>
        <button onClick={this.handleLogin}>{status}</button>
        {isLoggedIn && <Greeting name="Sulaymon" />}
      </div>
    );
  }
}
export default Login;
