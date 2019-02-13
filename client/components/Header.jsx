import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const imgUrl = "http://www.squishable.com/mm5/graphics/00000001/opensquish_pink_fairy_armadillo_303018_design.jpg";
    return (
      <div>
        <div className='flex-container v-flex'>
          <div>
            <NavLink to='/'><img src={imgUrl} id='avatar'></img></NavLink>
          </div>
        </div>
      </div>
    )
  }
}

export default Header;



