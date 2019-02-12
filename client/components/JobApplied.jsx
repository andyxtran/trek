import React, { Component } from 'react';
import AddCard from './AddCard';
import JobCards from './JobCards';
import '../css/JobPostings.css';

class JobApplied extends Component {
  constructor(props) {
    super(props)
    this.state = {
      jobsArray: [],
    }
    this.pushIntoJobsArray = this.pushIntoJobsArray.bind(this);
  }

  pushIntoJobsArray(card) {
    this.setState({
      jobsArray: [...this.state.jobsArray, card],
    })
  }

  componentDidMount() {
    fetch('/getcards', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ username: this.props.username })
    })
    .then(res => res.json())
    .then(res => {
      this.setState({ jobsArray: res });
    })
  }

  render() {
    const jobsToRender = [];
    this.state.jobsArray.forEach(job => {
      jobsToRender.push(<JobCards jobsArray={job} />)
    })
    return (
      <div className="job-posting-container v-flex">
        <AddCard username={this.props.username} pushIntoJobsArray={this.pushIntoJobsArray} />
        {jobsToRender}
      </div>
    )
  }
}

export default JobApplied;
