import React from 'react';
import '../css/Sidebar.css';
import { Link } from 'react-router-dom';

function Sidebar() {

  return (
    <div className="navMenu">
      <ul className='text-light'>
        <li className="nav-item">
          <Link className="nav-link" to="/groups">
            Groups
          </Link>
        </li>
        <li className="nav-item sign-out">
          <Link className="nav-link" to="/login">
            Sign Out
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;