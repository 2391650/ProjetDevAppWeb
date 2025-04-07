import React from "react";
import green from "../assets/images/greenWaves.png"; 
import blue from "../assets/images/blueWaves.png"; 
import pink from "../assets/images/pinkWaves.png"; 
// https://app.haikei.app/

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
      group: "Group 102",
      students: "23 Students",
      image: pink
    }

];

function Groups() {  
  return (
    <div className="container">
      <div className="row">
        {cards.map((card) => (
          <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="card mb-4" style={{marginTop: "50px"}}>
              <img
                src={card.image}
                style={{ objectFit: "cover", height: "200px", width: "100%" }}
              />
              <h5 className="card-title text-light" style={{position: "absolute", fontSize: "40px", top: "50px", left: "20px"}}>{card.group}</h5>
              <div className="card-body bg-dark" >
                <p className="text-light" >{card.students}</p>
              </div>
            </div>
          </div>
         ))}
      </div>
    </div>
  );
}

export default Groups;
