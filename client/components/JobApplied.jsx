import React, { Component } from 'react';
import AddCard from './AddCard';
import JobCards from './JobCards';
import '../css/JobPostings.css';

class JobApplied extends Component {
  constructor(props) {
    super(props)
    this.state = {
      jobsArray: [
      {
      card_id: 1,
      title: 'Senior Engineer',
      company: 'Google',
      description: 'NY position for google',
      location: 'Manhattan, NY',
      salary: 190000,
      notes: 'This is my dream job!',
      contact: 'Sundar',
      priority: 1,
      link: 'www.google.com/jobapplication',
      created_date: 'February 5 2019',
      last_updated: 'February 11 2019'
      },
      {
        card_id: 2,
        title: 'Mid Engineer',
        company: 'Facebook',
        description: 'NY position for FB',
        location: 'Manhattan, NY',
        salary: 150000,
        notes: 'Hacksss!',
        contact: 'Zuckerberg',
        priority: 2,
        link: 'www.facebook.com/jobapplication',
        created_date: 'February 6 2019',
        last_updated: 'February 10 2019'
        }
    ]}
  }

  render() {
    const jobsToRender = [];
    this.state.jobsArray.forEach(job => {
      jobsToRender.push(<JobCards jobsArray={job} />)
    })
    return (
      <div className="job-posting-container v-flex">
        <AddCard />
        {jobsToRender}
      </div>
    )
  }
}

export default JobApplied;
