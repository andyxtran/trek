import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import HeaderWrapper from '../css/HeaderWrapper';

class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <HeaderWrapper>
        <NavLink to='/'><img src='img/trek-logo.png' id='avatar'></img></NavLink>
      </HeaderWrapper>
    )
  }
}

export default Header;



