import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { Link, NavLink, Redirect } from 'react-router-dom';

class UpdateCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.jobInfo.title,
      company: this.props.jobInfo.company,
      description: this.props.jobInfo.description,
      location: this.props.jobInfo.location,
      link: this.props.jobInfo.link,
      salary: this.props.jobInfo.salary,
      notes: this.props.jobInfo.notes,
      contact: this.props.jobInfo.contact,
      priority: this.props.jobInfo.priority,
    };

    this.updateState = this.updateState.bind(this);
    this.handleFormSubmission = this.handleFormSubmission.bind(this);
  }

  updateState(event) {
    const input = {
      [event.target.name]: event.target.value,
    };
    this.setState(input, console.log('im setting state'));
  }

  handleFormSubmission(e) {
    e.preventDefault();

    const reqBody = Object.assign(
      {},
      this.state,
      { card_id: this.props.jobInfo.card_id },
      { last_updated: new Date().toLocaleDateString() },
    );
    fetch('/updatecards', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(reqBody),
    })
      .then(res => res.json())
      .then(res => {
        if (res.cardUpdated) {
          this.props.pushIntoJobsArray(reqBody);
          this.props.edited();
          return;
        } else {
          console.log('ERROR: did not add card to database');
          return;
        }
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div>
        <Link to="/dashboard">
          <button>Back</button>
        </Link>

        <form onSubmit={this.handleFormSubmission}>
          <label htmlFor="title">Job title:</label>
          <input
            type="text"
            name="title"
            id="signup_title"
            value={this.state.title}
            onChange={this.updateState}
          />

          <label htmlFor="signup_company">Company:</label>
          <input
            type="text"
            name="company"
            id="signup_company"
            value={this.state.company}
            onChange={this.updateState}
          />

          <label htmlFor="signup_description">Job Description:</label>
          <input
            type="text"
            name="description"
            id="signup_description"
            value={this.state.description}
            onChange={this.updateState}
          />

          <label htmlFor="signup_location">Job Location:</label>
          <input
            type="text"
            name="location"
            id="signup_location"
            value={this.state.location}
            onChange={this.updateState}
          />

          <label htmlFor="signup_link">URL:</label>
          <input
            type="text"
            name="link"
            id="signup_link"
            value={this.state.link}
            onChange={this.updateState}
          />

          <label htmlFor="signup_salary">Salary range:</label>
          <input
            type="number"
            name="salary"
            id="signup_salary"
            value={this.state.salary}
            onChange={this.updateState}
          />

          <label htmlFor="signup_notes">Note:</label>
          <input
            type="text"
            name="notes"
            id="signup_notes"
            value={this.state.notes}
            onChange={this.updateState}
          />

          <label htmlFor="signup_contact">Contact:</label>
          <input
            type="text"
            name="contact"
            id="signup_contact"
            value={this.state.contact}
            onChange={this.updateState}
          />

          <label htmlFor="signup_priority">Priority:</label>
          <input
            type="number"
            name="priority"
            id="signup_priority"
            value={this.state.priority}
            onChange={this.updateState}
          />

          <button type="submit">update card </button>
        </form>
      </div>
    );
  }
}

export default UpdateCard;
