import React from 'react';
import './Navbar.css';
import logo from '../images/HopQuest_Logo.png';
import pfp from '../images/pfp.png';

function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg sticky-top" >
      <a class="navbar-brand" href="/">
        <div class="logo-image">
          <img src={logo} class="img-fluid"/>
        </div>
      </a>
      <a class="navbar-brand text-light" href="#">
        HopQuest
      </a>
      <div class="navbar-collapse" id="navbarText">
        <ul class="navbar-nav mr-auto">
          <li>
            <a class="nav-link text-light" href="#">
              Home
            </a>
          </li>
        </ul>
        <span class="navbar-text text-light">Prof</span>
        <a class="pfp-image" href='#'>
          <img src={pfp} class="img-fluid" href="#"/>
        </a>
      </div>
    </nav>
  );
}

export default Navbar;