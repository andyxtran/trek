import React, { Component } from 'react';
import '../css/JobCards.css';

class JobCards extends Component {
  constructor(props) {
    super(props);

    this.deleteCard = this.deleteCard.bind(this);
  }

  deleteCard() {
    console.log('im running: delete card', this.props.jobsArray.card_id);
    let card_id = this.props.jobsArray.card_id;

    fetch('/deletecards', {
      method: 'DELETE',
      body: JSON.stringify({ card_id }),
      headers: {
        'Content-Type': 'application/json',
      },
    }).then(response => response.json());
  }

  render() {
    const {
      card_id,
      title,
      company,
      description,
      location,
      salary,
      notes,
      contact,
      link,
      priority,
      created_date,
      last_updated,
    } = this.props.jobsArray;
    console.log(this.props);
    return (
      <div className="jobCards">
        <ul>
          <li>Title: {title}</li>
          <li>Company: {company}</li>
          <li>Description: {description}</li>
          <li>Location: {location}</li>
          <li>Salary: {salary}</li>
          <li>Contact: {contact}</li>
          <li>Link: {link}</li>
          <li>Priority: {priority}</li>
          <li>Created at: {new Date(created_date).toLocaleDateString()}</li>
          <li>Updated at: {new Date(last_updated).toLocaleDateString()}</li>
          <li>Notes: {notes}</li>
        </ul>
        <button onClick={this.deleteCard}>Delete Card</button>
      </div>
    );
  }
}

export default JobCards;
