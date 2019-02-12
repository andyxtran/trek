import React, { Component } from 'react';

class AddCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      company: '',
      description: '',
      location: '',
      link: '',
      salary: 0,
      notes: '',
      contact: '',
      priority: 0
    }

    this.updateState = this.updateState.bind(this);
    this.addCard = this.addCard.bind(this);
    this.deleteCard = this.deleteCard.bind(this);
  }

  updateState(event) {
    const input = {
      [event.target.name]: event.target.value
    }
    this.setState(input);
  }

  addCard() {
    let data = this.state
    console.log(data)
    fetch('/newjobcard', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
      .then(res => {
        res.json()
      })
      .then(res => console.log(res))

  }

  deleteCard(Card) {
    fetch('/deleteCards', {
      method: 'DELETE'
    })
      .then(response => response.json());
  }

  handleFormSubmission(e) {
    e.preventDefault();

    const reqBody = {
      title: this.state.title,
      company: this.state.company,
      description: this.state.description,
      location: this.state.location,
      link: this.state.link,
      salary: this.state.salary,
      notes: this.state.notes,
      contact: this.state.contact,
      priority: this.state.priority,
      username: "dsadas"
    };
  }

  render() {
    return (
      <form onSubmit={this.handleFormSubmission}>
        <label htmlFor="title">Job title:</label>
        <input type="text" name="title" id="signup_title" value={this.state.jobTitle}
          onChange={this.updateState} />

        <label htmlFor="signup_company">Company:</label>
        <input type="text" name="company" id="signup_company" value={this.state.company}
          onChange={this.updateState} />

        <label htmlFor="signup_description">Job Description:</label>
        <input type="text" name="description" id="signup_description" value={this.state.jobDescription}
          onChange={this.updateState} />

        <label htmlFor="signup_location">Job Location:</label>
        <input type="text" name="location" id="signup_location" value={this.state.jobLocation}
          onChange={this.updateState} />

        <label htmlFor="signup_link">URL:</label>
        <input type="text" name="link" id="signup_link" value={this.state.url}
          onChange={this.updateState} />

        <label htmlFor="signup_salary">Salary range:</label>
        <input type="text" name="salary" id="signup_salary" value={this.state.salaryRange}
          onChange={this.updateState} />

        <label htmlFor="signup_notes">Note:</label>
        <input type="text" name="notes" id="signup_notes" value={this.state.note}
          onChange={this.updateState} />

        <label htmlFor="signup_contact">Contact:</label>
        <input type="text" name="contact" id="signup_contact" value={this.state.jobTitle}
          onChange={this.updateState} />

        <label htmlFor="signup_priority">Priority:</label>
        <input type="text" name="priority" id="signup_priority" value={this.state.jobTitle}
          onChange={this.updateState} />

        <button type="submit">Add Card</button>
        <button onClick={this.deleteCard}>Delete Card</button>
      </form>
    )
  }
}

export default AddCard;
