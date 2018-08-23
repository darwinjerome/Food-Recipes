import React, { Component } from 'react';
import {Link} from 'react-router-dom';
//import SearchComponent from '../Components/SearchComponent';

class Navigation extends Component {
  render() {
    return (
      <div className="navigation sticky">
          <ul className='navLink'>
            <li><Link to={`/`} >Home</Link></li>
            <li><Link to={`/about`} >About</Link></li>
            {/* <li className='li-large'><SearchComponent /></li> */}
          </ul>
      </div>
    );  
  }
}

export default Navigation;