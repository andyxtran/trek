import React, { Component } from 'react';
import { CardWrapper } from '../css/JobCards.jsx';

class JobCards extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { 
      title,  company, description, location, salary, notes, 
      contact, link, priority, created_date, last_updated 
    } = this.props.jobsArray;
    return (
      <div>
        <h2>{title}</h2>
        <ul>
          <li>Company: {company}</li>
          <li>Description: {description}</li>
          <li>Location: {location}</li>
          <li>Salary: {salary}</li>
          <li>Contact: {contact}</li>
          <li>Link: {link}</li>
          <li>Priority: {priority}</li>
          <li>Created at: {(new Date(created_date)).toLocaleDateString()}</li>
          <li>Updated at: {(new Date(last_updated)).toLocaleDateString()}</li>
          <li>Notes: {notes}</li>
        </ul>
        </div>
    )
  }
}

export default JobCards;