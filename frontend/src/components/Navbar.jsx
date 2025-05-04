import React from "react";
import "./Navbar.css";
import logo from "../assets/images/HopQuest_Logo.png";

function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg sticky-top">
      <div className="container-fluid">
        <div className="logo-image">
          <img src={logo} class="img-fluid" />
        </div>
        <h1
          class="text-light mr-auto"
          style={{ marginBottom: "-2px", marginLeft: "10px", fontSize: "25px"}}
        >
          HopQuest
        </h1>
      </div>
    </nav>
  );
}

export default Navbar;
