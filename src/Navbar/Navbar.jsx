import React from 'react';
import './Navbar.css';
import logo from '../images/HopQuest_Logo.png';
import pfp from '../images/pfp.png';

function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg sticky-top" >
      <div className="container-fluid">
        <div className="logo-image">
          <img src={logo} class="img-fluid" />
        </div>
        <h1 class="navbar-brand text-light mr-auto" style={{marginBottom: "-10px", marginLeft: "10px"}} href="#">
          HopQuest
        </h1>
        <div class="d-flex" id="navbarText">
          <span class="navbar-text text-light">Miss Viki</span>
          <a class="pfp-image" href='#'>
            <img src={pfp} class="img-fluid logo-image" href="#" />
          </a>
        </div>
      </div>

    </nav>
  );
}

export default Navbar;