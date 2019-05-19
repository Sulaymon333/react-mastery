import React, { Component } from 'react';
import { BrowserRouter, Switch, Link, NavLink, Route } from 'react-router-dom';

const Home = prop => {
  return <h1>My name is Homepage</h1>;
};
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        {/* the Link or NavLink are used in place of anchor tag in HTML. 
      NavLink has more functionalities like active class and so on 
      that can be styled as we wish */}
        <ul>
          <li>
            <NavLink to="/">HOME</NavLink>
          </li>
          <li>
            <Link to="/about">ABOUT</Link>
          </li>
          <li>
            <Link to="/contact">CONTACT</Link>
          </li>
          <li>
            <Link to="/topics">TOPICS</Link>
          </li>
        </ul>
        {/* The Route component is used to redirect the link to the appropriate page. it takes two props,
        path and render or component. Component is commonly used. Note: the exact keyword makes sure 
        that other pages are not rendered as addition to the home page */}
        <Route exact path="/" component={Home} />
        <Route
          path="/about"
          render={() => {
            return <h1>My name is About page</h1>;
          }}
        />
        <Route
          path="/contact"
          render={() => {
            return <h1>My name is Contact page</h1>;
          }}
        />
        <Route
          path="/topics"
          render={() => {
            return <h1>My name Topics page</h1>;
          }}
        />
      </BrowserRouter>
    );
  }
}
export default App;
