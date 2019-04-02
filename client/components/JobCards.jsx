import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { Link, NavLink, Redirect } from 'react-router-dom';
import UpdateCard from './UpdateCard.jsx';
import { CardWrapper } from '../css/JobCards.jsx';
import ButtonWrapper from '../css/ButtonWrapper';

class JobCards extends Component {
  constructor(props) {
    super(props);
    this.state = {
      edit: false,
    };
    this.deleteCard = this.deleteCard.bind(this);
    this.editCard = this.editCard.bind(this);
  }

  deleteCard() {
    // console.log('im running: delete card', this.props.jobsArray.card_id);
    let card_id = this.props.jobsArray.card_id;
    console.log(card_id);
    fetch('/deletecards', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ card_id }),
    })
      .then(res => res.json())
      .then(res => {
        console.log('the response is', res);
        if (res.cardDeleted) {
          console.log('deleting..', this.props.jobsArray.card_id, this.props.index);
          this.props.removeFromJobsArray(this.props.jobsArray.card_id);
          return;
        } else {
          console.log('Error deleting card from databbase');
          return;
        }
      })
      .catch(err => console.log(err));
  }

  editCard() {
    this.setState({
      edit: !this.state.edit,
    });
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
    // console.log(this.props);
    if (this.state.edit === true) {
      return (
        <UpdateCard
          jobInfo={this.props.jobsArray}
          pushIntoJobsArray={this.props.pushIntoJobsArray}
          edited={this.editCard}
        />
      );
    }
    return (
      <div>
        <h2>{company}</h2>
        <ul>
          <li>Title: {title}</li>
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
        <span>
          <ButtonWrapper onClick={this.deleteCard}>delete</ButtonWrapper>
          <ButtonWrapper onClick={this.editCard}> edit</ButtonWrapper>
        </span>
      </div>
    );
  }
}

export default JobCards;

{
  /* <Link
to={{ pathname: '/updatecard', state: { newtest: 'wow', test: this.props.jobsArray } }}
>
Edit Card
</Link> */
}
