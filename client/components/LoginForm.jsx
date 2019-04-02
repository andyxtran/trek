import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { NavLink, Redirect } from 'react-router-dom'
import LoginWrapper from '../css/FormWrapper';
import Header from './Header';

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
        .then(res => res.json())
        .then(res => {
          if (res.hasOwnProperty('jwt')) {
            // this.props.history is used to redirect the user to 
            // another router from outside the render() method
            this.props.history.push({
              pathname: '/dashboard',
              state: { jwt: res.jwt }
            });
          } else {
            this.setState({ loginError: true, username: '', password: '' });
          }
        });
    }
  }

  render() {
    let errorMessage = [];
    if (this.state.loginError) {
      errorMessage.push(<span>Username/password not found.</span>);
    }

    return (
      <div>
        <Header />
        <LoginWrapper>
          <h1>Login</h1>
          <form onSubmit={this.submitState} className="login-form-container v-flex">
            <label htmlFor="login_form_username"></label>
            <input type="text" id="login_form_username" name="username" 
              placeholder="Username" value={this.state.username}
              required onChange={this.updateState} />

            <label htmlFor="login_form_password"></label>
            <input type="password" id="login_form_password" name="password" 
              placeholder="Password" value={this.state.password}
              required onChange={this.updateState} />

              {errorMessage}

            <div className="btns_cont">
              <NavLink to="/register">Create an account</NavLink>
              <button type="submit">Submit</button>
            </div>
          </form>
        </LoginWrapper>
      </div>
    );
  }
}
export default withRouter(LoginForm);
