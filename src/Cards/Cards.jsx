import React from "react";
import green from "../images/greenWaves.png"; 
// https://app.haikei.app/

function Cards() {
  return (
    <div className="container d-flex align-items-center vh-100">
      <div className="card" style={{ maxWidth: "400px" }}>
        <img src={green} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="#" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    </div>
  );
}

export default Cards;
