import React, { Component } from 'react';
import PropTypes from 'prop-types';
import InputField from './InputField';

class AddUser extends Component {
  state = {
    firstName: '',
    lastName: '',
    age: '',
    gender: '',
    skills: {
      html: false,
      css: false,
      javascript: false,
      react: false
    }
  };

  handleChange = e => {
    const { id, name, type, value } = e.target;
    if (type === 'checkbox') {
      // make a copy of the skill object
      const skills = { ...this.state.skills };
      // toggle the key value
      skills[id] = !skills[id];
      // update the state
      this.setState({
        skills: skills
      });
    } else if (type === 'radio') {
      this.setState({ [name]: value });
    } else {
      this.setState({
        [id]: value
      });
    }
    // console.log(this.state);
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <InputField
          label="First Name: "
          type="text"
          id="firstName"
          placeholder="First Name"
          value={this.state.firstName}
          onChange={this.handleChange}
        />
        <InputField
          label="Last Name: "
          type="text"
          id="lastName"
          placeholder="Last Name"
          value={this.state.lastName}
          onChange={this.handleChange}
        />
        <InputField
          label="Age: "
          type="text"
          id="age"
          placeholder="Age"
          value={this.state.age}
          onChange={this.handleChange}
        />

        <fieldset>
          <legend>Choose your gender</legend>
          <InputField
            label="Female"
            type="radio"
            id="female"
            name="gender"
            value="Female"
            onChange={this.handleChange}
          />
          <InputField label="Male" type="radio" id="male" name="gender" value="Male" onChange={this.handleChange} />
          <InputField label="Other" type="radio" id="Other" name="gender" value="Other" onChange={this.handleChange} />
        </fieldset>
        <fieldset>
          <legend>Choose your skills</legend>
          <InputField
            label="HTML"
            type="checkbox"
            id="html"
            name="skills"
            value={this.state.skills.html}
            onChange={this.handleChange}
          />
          <InputField
            label="CSS"
            type="checkbox"
            id="css"
            name="skills"
            value={this.state.skills.css}
            onChange={this.handleChange}
          />
          <InputField
            label="JAVASCRIPT"
            type="checkbox"
            id="javascript"
            name="skills"
            value={this.state.skills.javascript}
            onChange={this.handleChange}
          />
          <InputField
            label="REACT"
            type="checkbox"
            id="react"
            name="skills"
            value={this.state.skills.react}
            onChange={this.handleChange}
          />
        </fieldset>
        <button type="submit">Submit</button>
      </form>
    );
  }
}
AddUser.defaultProps = {
  type: 'text'
};
AddUser.propTypes = {};
export default AddUser;
