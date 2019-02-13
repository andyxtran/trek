import React, { Component } from 'react';
import AddCard from './AddCard';
import JobCards from './JobCards';
import Header from './Header';
import DashboardWrapper from '../css/DashboardWrapper';
import AddCardModal from './AddCardModal';

import CardWrapper from '../css/JobCards.jsx';

class JobApplied extends Component {
  constructor(props) {
    super(props)
    this.state = {
      jobsArray: [],
      displayModal: false,
    }
    this.pushIntoJobsArray = this.pushIntoJobsArray.bind(this);
    this.displayModal = this.displayModal.bind(this);
  }

  pushIntoJobsArray(card) {
    this.setState({
      jobsArray: [...this.state.jobsArray, card],
    })
  }

  displayModal() {
    this.setState({ displayModal: !this.state.displayModal }) 
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
    const addCardModal = [];
    const jobsToRender = [];

    this.state.jobsArray.forEach(job => {
      jobsToRender.push(<JobCards jobsArray={job} />)
    })
    if (this.state.displayModal) {
      addCardModal.push(<AddCardModal pushIntoJobsArray = {this.pushIntoJobsArray} displayModal={this.displayModal}/>);
    }
    return (
      <DashboardWrapper>
        {addCardModal}
        <nav>
          <Header />
          <button onClick={this.displayModal}>Add Card</button>
        </nav>
        <CardWrapper>
        {jobsToRender}
        </CardWrapper>
      </DashboardWrapper>
    )
  }
}

export default JobApplied;
