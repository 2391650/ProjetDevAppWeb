import React from 'react';
import './Sidebar.css';
import { Link } from 'react-router-dom';

function Sidebar() {

  return (
    <div class="navMenu">
      <ul className='text-light'>
        <li className="nav-item">
          <Link class="nav-link" to="/home">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link class="nav-link" to="/AboutUs">
            About Us
          </Link>
        </li>
        <li className="nav-item sign-out">
          <Link class="nav-link" to="/">
            Sign Out
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;