import React from "react";
import green from "../images/greenWaves.png"; 
import "./Cards.css";
// https://app.haikei.app/

function Cards() {
  return (
    <div className="container">
      <div className="row">
          <div className="col-lg-5 col-md-6 col-sm-12">
            <div className="card mb-4" style={{marginTop: "50px"}}>
              <img
                src={green}
                style={{ objectFit: "cover", height: "200px", width: "100%" }}
              />
              <h5 className="card-title text-light" style={{position: "absolute", fontSize: "40px", top: "50px", left: "20px"}}>Group 101</h5>
              <div className="card-body bg-dark" >
                <p className="text-light" >22 Students</p>
              </div>
            </div>
          </div>
      </div>
    </div>
  );
}

export default Cards;
