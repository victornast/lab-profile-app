import React, { Component } from 'react';
import { signup } from './../services/authService';

class SignUp extends Component {
  state = { name: '', email: '', password: '', campus: '', course: '' };

  handleFormSubmission = async (event) => {
    event.preventDefault();
    const { name, email, password, campus, course } = this.state;

    const data = new FormData();
    const values = { name, email, password, campus, course };
    for (let key in values) {
      data.append(key, values[key]);
    }
    const user = await signup(data);

    // const user = await signUp({ name, email, password, picture });

    console.log(user);
    this.props.onUserChange(user);
  };

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleFileInputChange = (event) => {
    const { name, files } = event.target;
    this.setState({ [name]: files[0] });
  };

  render() {
    return (
      <div>
        <h1 className="text-3xl text-green-900 font-bold mb-6">Signup</h1>
        <form onSubmit={this.handleFormSubmission} className="flex space-x-52">
          <fieldset className="flex flex-col ">
            <label htmlFor="name-input">Name</label>
            <input
              className="mb-2 bg-gray-100 w-56 p-1"
              id="name-input"
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleInputChange}
            />

            <label htmlFor="input-email">Email</label>
            <input
              className="mb-2 bg-gray-100 w-56 p-1"
              id="input-email"
              type="email"
              name="email"
              value={this.state.email}
              onChange={this.handleInputChange}
            />

            <label htmlFor="input-password">Password</label>
            <input
              className="mb-2 bg-gray-100 w-56 p-1"
              id="input-password"
              type="password"
              name="password"
              value={this.state.password}
              onChange={this.handleInputChange}
            />

            <label htmlFor="campus-input">Campus</label>
            <input
              className="mb-2 bg-gray-100 w-56 p-1"
              id="campus-input"
              type="text"
              name="campus"
              value={this.state.campus}
              onChange={this.handleInputChange}
            />

            <label htmlFor="course-input">Course</label>
            <input
              className="mb-2 bg-gray-100 w-56 p-1"
              id="course-input"
              type="text"
              name="course"
              value={this.state.course}
              onChange={this.handleInputChange}
            />
          </fieldset>

          <button className="self-end m-2 w-56 flex items-center justify-center shadow-md py-2 text-base text-gray-900 font-semibold rounded-md bg-gray-200 hover:bg-gray-100">
            Sign Up
          </button>
        </form>
      </div>
    );
  }
}

export default SignUp;
