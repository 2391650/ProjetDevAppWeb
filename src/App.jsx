import { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark" >
        <a class="navbar-brand text-light" href="#">
          HopQuest
        </a>
        <div class="collapse navbar-collapse" id="navbarText">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <a class="nav-link text-light" href="#">
                Home <span class="sr-only">(current)</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-light" href="#">
                Features
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-light" href="#">
                Pricing
              </a>
            </li>
          </ul>
          <span class="navbar-text text-light">Navbar text with an inline element</span>
        </div>
      </nav>
    </>
  );
}

export default App;
