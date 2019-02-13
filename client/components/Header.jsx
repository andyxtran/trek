import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import HeaderWrapper from '../css/HeaderWrapper';

class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const imgUrl = "http://www.squishable.com/mm5/graphics/00000001/opensquish_pink_fairy_armadillo_303018_design.jpg";
    return (
      <HeaderWrapper>
        <NavLink to='/'><img src={imgUrl} id='avatar'></img></NavLink>
      </HeaderWrapper>
    )
  }
}

export default Header;



