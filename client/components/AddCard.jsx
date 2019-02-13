import React, { Component } from 'react';
import AddCardWrapper from '../css/AddCardWrapper';
const jwt = require('jsonwebtoken');

class AddCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      company: '',
      description: '',
      location: '',
      link: '',
      salary: '',
      notes: '',
      contact: '',
      priority: '',
    };

    this.updateState = this.updateState.bind(this);
    this.handleFormSubmission = this.handleFormSubmission.bind(this);
  }

  updateState(event) {
    const input = {
      [event.target.name]: event.target.value,
    };
    this.setState(input);
  }

  handleFormSubmission(e) {
    e.preventDefault();

    const reqBody = Object.assign({}, this.state, { username: this.props.username });
    fetch('/newjobcard', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(reqBody),
    })
      .then(res => res.json())
      .then(res => {
        if (res.cardInserted) {
          reqBody['created_date'] = new Date().toLocaleDateString();
          reqBody['last_updated'] = new Date().toLocaleDateString();
          this.props.pushIntoJobsArray(reqBody);
          this.props.displayModal()
          return this.setState({
            title: '',
            company: '',
            description: '',
            location: '',
            link: '',
            salary: '',
            notes: '',
            contact: '',
            priority: '',
          });
        } else {
          console.log('ERROR: did not add card to database');
          return;
        }
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <AddCardWrapper>
        <h3>Job Details</h3>
        <form onSubmit={this.handleFormSubmission}>
          <div>
            <label htmlFor="title">Job title:</label>
            <input
              type="text"
              name="title"
              id="signup_title"
              value={this.state.title}
              onChange={this.updateState}
            />
          </div>

          <div>
            <label htmlFor="signup_company">Company:</label>
            <input
              type="text"
              name="company"
              id="signup_company"
              value={this.state.company}
              onChange={this.updateState}
            />
          </div>

          <div>
            <label htmlFor="signup_description">Job Description:</label>
            <input
              type="text"
              name="description"
              id="signup_description"
              value={this.state.description}
              onChange={this.updateState}
            />
          </div>

          <div>
            <label htmlFor="signup_location">Job Location:</label>
            <input
              type="text"
              name="location"
              id="signup_location"
              value={this.state.location}
              onChange={this.updateState}
            />
          </div>

          <div>
            <label htmlFor="signup_link">URL:</label>
            <input
              type="text"
              name="link"
              id="signup_link"
              value={this.state.link}
              onChange={this.updateState}
            />
          </div>

          <div>
            <label htmlFor="signup_salary">Salary range:</label>
            <input
              type="number"
              name="salary"
              id="signup_salary"
              value={this.state.salary}
              onChange={this.updateState}
            />
          </div>

          <div>
            <label htmlFor="signup_notes">Note:</label>
            <input
              type="text"
              name="notes"
              id="signup_notes"
              value={this.state.notes}
              onChange={this.updateState}
            />
          </div>

          <div>
            <label htmlFor="signup_contact">Contact:</label>
            <input
              type="text"
              name="contact"
              id="signup_contact"
              value={this.state.contact}
              onChange={this.updateState}
            />
          </div>

          <div>
            <label htmlFor="signup_priority">Priority:</label>
            <input
              type="number"
              name="priority"
              id="signup_priority"
              value={this.state.priority}
              onChange={this.updateState}
            />
          </div>

          <div />
          <div />
          <button type="submit">Add Card</button>
        </form>
      </AddCardWrapper>
    );
  }
}

export default AddCard;
