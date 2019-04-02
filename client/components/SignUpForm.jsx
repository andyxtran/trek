import React, {  Component } from 'react';
import { NavLink } from 'react-router-dom';
import FormWrapper from '../css/FormWrapper';
import SignupWrapper from '../css/SignupWrapper';
import Header from './Header';

class SignUpForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: '',
      f_name: '',
      l_name: '',
      email: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    const input = {
      [e.target.name]: e.target.value
    }
    this.setState(input);
  }

  handleSubmit() {
    const { username, password, email } = this.state;
    if (username === '' || password === '' || email === '') {
      alert('User name, password, or email field cannot be empty')
    } else {
      const data = this.state;

      fetch('/signup', {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      })
        .then(res => {
          console.log('inside signupform', res);
          if (res.redirected === true) {
            window.sessionStorage.setItem('Authorized', 'true');
            this.props.toggleModal();
          }
        });

      this.setState({
        username: '',
        password: '',
        f_name: '',
        l_name: '',
        email: ''
      })
    }
  }

  render() {
    return (
      <div>
        <Header />
        <SignupWrapper>
          <FormWrapper>
            <h1>Signup</h1>
            <form>
              <input type="text" id="signup_username" placeholder="Username (Required)" 
                value={this.state.username} onChange={this.handleChange} />

              <input type="text" id="signup_password" placeholder="Password (Required)" 
                value={this.state.password} onChange={this.handleChange} />

              <input type="text" id="signup_email" placeholder="Email (Required)" 
                value={this.state.email} onChange={this.handleChange} />

              <input type="text" id="signup_f_name" placeholder="First Name" 
                value={this.state.f_name} onChange={this.handleChange} />

              <input type="text" id="signup_l_name" placeholder="Last Name" 
                value={this.state.l_name} onChange={this.handleChange} />

              <div className="btns_cont">
                <NavLink to='/'>Back to login</NavLink>
                <button onClick={this.handleSubmit}>Sign Up</button>
              </div>
            </form>
          </FormWrapper>
        </SignupWrapper>
      </div>
    )
  }
}

export default SignUpForm;
