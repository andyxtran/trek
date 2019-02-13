import React, { Component } from 'react';
import AddCardModalWrapper from '../css/AddCardModalWrapper';
import AddCard from './AddCard';

class AddCardModal extends Component {
  render() {
    return (
      <AddCardModalWrapper>
        <span onClick={this.props.displayModal} className="close_modal_btn">
          x
        </span>
        <AddCard username={this.props.username} pushIntoJobsArray={this.props.pushIntoJobsArray} />
      </AddCardModalWrapper>
    );
  }
}

export default AddCardModal;
