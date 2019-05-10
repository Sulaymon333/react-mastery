import React, { Component } from 'react';

import { studentsInfo } from './data/students-info';
import StudentList from './Components/StudentList';
import Header from './Components/Header';

export default class App extends Component {
  state = {
    firstName: 'Sulaymon',
    items: ['item 1', 'item 2', 'item 3']
  };

  handleChange = e => {
    this.setState({
      firstName: e.target.value
    });
  };

  // handleClick = e => {
  //   this.setState({
  //     items: [...items]
  //   });
  // };

  render() {
    const itemList = this.state.items.map((item, i) => <li key={item + i}>{item}</li>);
    return (
      <div>
        <Header description="Let us study proptypes, default props and form handling in React" />
        <StudentList studentsInfo={studentsInfo} />
        <hr className="container" />
        <div className="container">
          <br />
          <br />
          <ul>{itemList}</ul>
          <br />
          <br />
          <input
            onChange={this.handleChange}
            type="text"
            value={this.state.firstName}
            name="firstName"
            placeholder="Your first name"
          />
          <button onClick={this.handleClick}>Add</button>

          <h1>My awesome name is {this.state.firstName}</h1>
        </div>
      </div>
    );
  }
}
