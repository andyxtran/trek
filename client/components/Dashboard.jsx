import React, { Component } from 'react';
import { Redirect, Route } from 'react-router';
import '../css/Dashboard.css';
import JobApplied from './JobApplied';


class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false
    }

    this.toggleModal = this.toggleModal.bind(this);
  }

  componentWillMount() {
    if (window.sessionStorage.getItem('Authorized') === 'true') {
      this.setState({
        isLoggedIn: true
      })
    }
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
