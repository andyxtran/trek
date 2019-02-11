import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import '../css/Header.css';

class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className='flex-container v-flex'>
          <div>
            <NavLink to='/'><img src={this.props.avatar} id='avatar'></img></NavLink>
          </div>
        </div>
      </div>
    )
  }
}

export default Header;



