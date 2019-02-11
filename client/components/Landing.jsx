import React, { Component } from 'react';
import Dashboard from './Dashboard';
class Landing extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="job-posting-container v-flex">
        <div>Landing</div>
        <Dashboard />
      </div>
      
    )
  }
}

export default Landing;
