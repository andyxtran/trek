import React, { Component } from 'react';
import { Redirect, Route } from 'react-router';
import JobApplied from './JobApplied';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      loadingPage: true,
      username: ''
    }
  }

  componentDidMount() {
    if (!this.props.location.state) {
      return this.setState({ loadingPage: false });
    }
    fetch('/validateJwt', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ jwt: this.props.location.state.jwt })
    })
    .then(res => res.json())
    .then(res => {
      if (res.validated) {
        return this.setState({ loadingPage: false, isLoggedIn: true, username: res.username });
      }
      return this.setState({ loadingPage: false });
    })
  }

  render() {
    if (this.state.loadingPage) {
      return (
        <div>
          Loading...
        </div>
      )
    } else {
      return this.state.isLoggedIn ? 
      <JobApplied username={this.state.username} /> :
      <Redirect to='/' />;
    } 
  }   
}

export default Dashboard;
