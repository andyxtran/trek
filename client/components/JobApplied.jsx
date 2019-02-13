import React, { Component } from 'react';
import AddCard from './AddCard';
import JobCards from './JobCards';
import Header from './Header';
import DashboardWrapper from '../css/DashboardWrapper';
import AddCardModal from './AddCardModal';

import CardWrapper from '../css/JobCards.jsx';

class JobApplied extends Component {
  constructor(props) {
    super(props);
    this.state = {
      jobsArray: [],
      displayModal: false,
    };
    this.pushIntoJobsArray = this.pushIntoJobsArray.bind(this);
    this.removeFromJobsArray = this.removeFromJobsArray.bind(this);
    this.displayModal = this.displayModal.bind(this);
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

  displayModal() {
    this.setState({ displayModal: !this.state.displayModal });
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
    const addCardModal = [];

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

    if (this.state.displayModal) {
      addCardModal.push(
        <AddCardModal
          displayModal={this.displayModal}
          pushIntoJobsArray={this.pushIntoJobsArray}
          username={this.props.username}
        />,
      );
    }
    return (
      <DashboardWrapper>
        {addCardModal}
        <nav>
          <Header />
          <button onClick={this.displayModal}>Add Card</button>
        </nav>
        <CardWrapper>{jobsToRender}</CardWrapper>
      </DashboardWrapper>
    );
  }
}

export default JobApplied;
