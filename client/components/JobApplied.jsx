import React, { Component } from 'react';
import AddCard from './AddCard';
import JobCards from './JobCards';
import '../css/JobPostings.css';

class JobApplied extends Component {
  constructor(props) {
    super(props);
    this.state = {
      jobsArray: [],
    };
    this.pushIntoJobsArray = this.pushIntoJobsArray.bind(this);
    this.removeFromJobsArray = this.removeFromJobsArray.bind(this);
  }

  pushIntoJobsArray(card) {
    this.setState({
      jobsArray: [...this.state.jobsArray, card],
    });
  }

  removeFromJobsArray(cardID) {
    const updatedArray = this.state.jobsArray.reduce((acc, cur) => {
      if (cur['card_id'] === cardID) return acc;
      acc.push(cur);
      return acc;
    }, []);
    this.setState({
      jobsArray: updatedArray,
    });
  }

  fetchData() {
    fetch('/getcards', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username: this.props.username }),
    })
      .then(res => res.json())
      .then(res => {
        this.setState({ jobsArray: res });
      });
  }

  componentDidUpdate() {
    this.fetchData();
  }
  componentDidMount() {
    this.fetchData();
  }

  render() {
    // console.log('JobsApplied.jsx state.jobsArray: ', this.state.jobsArray);
    const jobsToRender = [];
    this.state.jobsArray.forEach((job, i) => {
      jobsToRender.push(
        <JobCards
          jobsArray={job}
          index={i}
          key={i}
          removeFromJobsArray={this.removeFromJobsArray}
          pushIntoJobsArray={this.pushIntoJobsArray}
        />,
      );
    });
    return (
      <div className="job-posting-container v-flex">
        <AddCard username={this.props.username} pushIntoJobsArray={this.pushIntoJobsArray} />
        {jobsToRender}
      </div>
    );
  }
}

export default JobApplied;
