import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { NavLink, Redirect } from 'react-router-dom'
import '../css/LoginForm.css';

class LoginForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
      loginError: false
    }
    this.updateState = this.updateState.bind(this);
    this.submitState = this.submitState.bind(this);
  }

  updateState(event) {
    const input = {
      [event.target.name]: event.target.value
    }
    this.setState(input);
  }

  submitState(e) {
    e.preventDefault();

    if (this.state.username === '' || this.state.password === '') {
      alert("Must fill username AND password");
    } else {
      let data = this.state

      fetch('/signin', {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      })
        .then(res => {
          if (res.status === 200) {
            // this.props.history is used to redirect the user to 
            // another router from outside the render() method
            window.sessionStorage.setItem('Authorized', 'true');
            this.props.history.push('/dashboard');
          } else {
            this.setState({ loginError: true, username: '', password: '' });
          }
        });
    }
  }

  render() {
    if (window.sessionStorage.getItem('Authorized') === 'true') {
      return <Redirect to='/dashboard' />;
    }

    let errorMessage = [];
    if (this.state.loginError) {
      errorMessage.push(<span>Username/password not found.</span>);
    }

    return (
      <form onSubmit={this.submitState} className="login-form-container v-flex">
        <label htmlFor="login_form_username">User Name:</label>
        <input type="text" id="login_form_username" name="username" 
          placeholder="User Name (Required)" value={this.state.username}
          required onChange={this.updateState} />

        <label htmlFor="login_form_password">Password:</label>
        <input type="password" id="login_form_password" name="password" 
          placeholder="Password (Required)" value={this.state.password}
          required onChange={this.updateState} />

          {errorMessage}

        <button type="submit">Login</button>
        <NavLink to="/register"><button>Sign Up</button></NavLink>
      </form>
    );
  }
}
export default withRouter(LoginForm);
