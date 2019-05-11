import React from 'react';
import {NavLink} from 'react-router-dom'


const NavBar = (props) => {

  return (
    <ul className="topnav">
        <NavLink to='/home' >
          Toms Trading Data
        </NavLink>
        <NavLink to='/get-data' >
          Get new Data
        </NavLink>
    </ul>
  );
}



export default (NavBar)