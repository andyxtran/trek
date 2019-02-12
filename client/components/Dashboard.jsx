import React, { Component } from 'react';
import { Redirect, Route } from 'react-router';
import '../css/Dashboard.css';
import JobApplied from './JobApplied';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: true
    }

    this.toggleModal = this.toggleModal.bind(this);
  }

  componentWillMount() {
    const jwtValue = this.props.location.state.jwt;
    fetch('/verifyJwt', {
      // pass JWT in body
    })
      .then(res => res.json())
      .then(res => {
        // if success, set state is logged in to true
      })
  }

  toggleModal() {
    this.setState({
      isLoggedIn: !this.state.isLoggedIn
    });
  }

  render() {
    return this.state.isLoggedIn ? 
      <JobApplied /> :
      <Redirect to='/' />; 
  }   
}

export default Dashboard;
