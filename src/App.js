import React, { Component } from 'react';
import { BrowserRouter, Route, Link, NavLink, Switch } from 'react-router-dom';

const Home = props => {
  return (
    <div>
      <h1>Welcome to Home</h1>
    </div>
  );
};

const About = props => {
  return (
    <div>
      <h1>About</h1>
    </div>
  );
};

const Contact = props => {
  return (
    <div>
      <h1>Contact</h1>
    </div>
  );
};
const HTMLPage = props => {
  return (
    <div>
      <h3>Let us discuss HTML</h3>
    </div>
  );
};

const CSSPage = props => {
  return (
    <div>
      <h3>Let us discuss CSS</h3>
    </div>
  );
};

const JSPage = props => {
  return (
    <div>
      <h3>Let us discuss JS</h3>
    </div>
  );
};
const REACTPage = props => {
  return (
    <div>
      <h3>Let us discuss REACT</h3>
    </div>
  );
};

const Topics = props => {
  console.log(props);
  const path = props.match.path;
  console.log(path);
  return (
    <div>
      <h2>Topics</h2>
      <hr />
      <ul>
        <li>
          <Link to={`${path}/html`}>HTML</Link>
        </li>

        <li>
          <Link to={`${path}/css`}>CSS</Link>
        </li>
        <li>
          <Link to={`${path}/js`}>JAVASCRIPT</Link>
        </li>
        <li>
          <Link to={`${path}/react`}>REACT</Link>
        </li>
      </ul>
      <Route path={`${path}/html`} component={HTMLPage} />
      <Route path={`${path}/css`} component={CSSPage} />
      <Route path={`${path}/js`} component={JSPage} />
      <Route path={`${path}/react`} component={REACTPage} />
    </div>
  );
};

const User = props => {
  const username = props.match.params.username;
  return (
    <div>
      <h4>Welcome {username}</h4>
    </div>
  );
};

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <ul>
          <li>
            {/* NavLink has more functionalities like active and so on */}
            <NavLink to="/">HOME</NavLink>
          </li>
          <li>
            <NavLink to="/about">ABOUT</NavLink>
          </li>
          <li>
            <Link to="/contact">CONTACT</Link>
          </li>
          <li>
            <Link to="/topics">TOPICS</Link>
          </li>
        </ul>

        <Switch>
          <Route path="/about" render={About} />
          <Route path="/contact" render={Contact} />
          <Route path="/topics" render={Topics} />
          <Route path="/" Component={Home} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
