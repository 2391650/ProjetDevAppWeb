import React from 'react';
import './Sidebar.css';
import { Link } from 'react-router-dom';

function Sidebar() {

  return (
    <div className="navMenu">
      <ul className='text-light'>
        <li className="nav-item">
          <Link class="nav-link" to="/groups">
            Groups
          </Link>
        </li>
        <li className="nav-item sign-out">
          <Link class="nav-link" to="/login">
            Sign Out
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;