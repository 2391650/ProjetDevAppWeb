import React from "react";
import './Cards.css'
import green from "../assets/images/greenWaves.png";
import blue from "../assets/images/blueWaves.png";
import pink from "../assets/images/pinkWaves.png";
import red from "../assets/images/redWaves.png";
// https://app.haikei.app/
import { Link } from "react-router-dom";

const cards = [
  {
    group: "Group 101",
    students: "22 Students",
    image: green
  },
  {
    group: "Group 102",
    students: "23 Students",
    image: blue
  },
  {
    group: "Group 103",
    students: "23 Students",
    image: pink
  },
  {
    group: "Group 104",
    students: "23 Students",
    image: red
  }

];

function Groups() {
  return (
    <div className="container">
      <div className="row">
        {cards.map((card) => (
          <div className="col-lg-4 col-md-6 col-sm-12">
            <Link to="/Group"><div className="card" style={{ marginTop: "50px" }}>
              <img
                src={card.image}
                style={{ objectFit: "cover", height: "200px", width: "100%" }}
              />
              <h5 className="card-title text-light" style={{ position: "absolute", fontSize: "40px", top: "50px", left: "20px" }}>{card.group}</h5>
              <div className="card-body bg-dark" >
                <p className="text-light" >{card.students}</p>
              </div>
            </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Groups;
