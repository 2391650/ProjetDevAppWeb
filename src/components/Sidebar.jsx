import React from 'react';
import './Sidebar.css'

function Sidebar() {
    return (
        <div class="navMenu">
        <ul className='text-light'>
          <li class="nav-item">
            <a class="nav-link" href="./callforpapers.html">
                Call for Papers
              </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="./papersubmission.html">
                Paper Submission
              </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="./acceptedpapers.html">
                Accepted Papers
              </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="./program.html">
                Program
              </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="./rumpsession.html">
                Rump Session
              </a>
          </li>
          </ul>
      </div>

        
    );
}

export default Sidebar;