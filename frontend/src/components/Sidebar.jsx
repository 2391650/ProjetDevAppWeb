import React from 'react';
import './Sidebar.css';
import { Link } from 'react-router-dom';

function Sidebar() {

  return (
    <div class="navMenu">
      <ul className='text-light'>
        <li class="nav-item">
          <Link class="nav-link" to="/home">
            Home
          </Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/AboutUs" >
            About Us
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;