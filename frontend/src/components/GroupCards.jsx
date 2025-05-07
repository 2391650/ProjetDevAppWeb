import React, {useState, useEffect} from 'react';
import axios from "axios";
import green from "../assets/images/greenWaves.png";
import blue from "../assets/images/blueWaves.png";
import pink from "../assets/images/pinkWaves.png";
import red from "../assets/images/redWaves.png";
import purple from "../assets/images/purpleWaves.png";
import yellow from "../assets/images/yellowWaves.png";
import dots from "../assets/images/dots.png"
import {Link} from "react-router-dom";
import './GroupCards.css';

// @author Tarek
function GroupCards() {
    const [groups, setGroups] = useState([]);
    const [nomGroupe, setNomGroupe] = useState("");

    useEffect(() => {
            fetchGroups();
    }, []);

    const fetchGroups = async () => {
        const localId = localStorage.getItem("profId");
        const response = await axios.get(`http://localhost:8181/groupe/read/${localId}`); // Inclure l'ID du professeur
        setGroups(response.data);
    };

    const createGroup = async (e) => {
        e.preventDefault();
        const profId = localStorage.getItem("profId");

        if (!profId) {
            console.error("Prof ID non trouvé dans localStorage");
            return;
        }

// @author Alex, Tarek
        await axios.post('http://localhost:8181/groupe/create', { nomGroupe, profId });
        setNomGroupe("");
        fetchGroups();
    };

    const deleteGroup = async (nom) => {
        await axios.delete(`http://localhost:8181/groupe/delete/${nom}`);
        fetchGroups();
    };

    return (
        <div>
            <button className="ajout-group" data-toggle="modal" data-target="#groupModal">
                +
            </button>
            <div className="modal fade" id="groupModal" tabIndex="-1" role="dialog"
                 aria-labelledby="exampleModalLabel"
                 aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Create Group</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <form onSubmit={createGroup}>
                                <input
                                    type="text"
                                    value={nomGroupe}
                                    onChange={(e) => setNomGroupe(e.target.value)}
                                    placeholder="Nom du groupe"
                                    required
                                />
                                <button type="submit">Créer Groupe</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row" style={{marginTop: "20px"}}>
                {groups.map((group, index) => (
                    <div className="col-lg-4 col-md-6 col-sm-12" key={index} >
                        <div className="card" style={{marginTop: "20px", marginLeft:"100px", maxWidth:"450px"}}>
                            <img
                                src={[green, blue, pink, red, purple, yellow][index % 6]}
                                alt={group.nomGroupe}
                                style={{objectFit: "cover", height: "200px", width: "100%"}}
                            />
                            <h5 className="card-title text-light" style={{
                                position: "absolute",
                                fontSize: "20px",
                                top: "50px",
                                left: "10px"
                            }}>{group.nomGroupe}</h5>
                            <div className="d-flex">
                                <div className="dropdown mr-1">
                                    <button type="button" className="btn"
                                            id="dropdownMenuOffset" data-toggle="dropdown" aria-haspopup="true"
                                            aria-expanded="false" data-offset="10,20">
                                        <img src={dots} style={{height:"30px"}}/>
                                    </button>
                                    <div className="dropdown-menu">
                                        <button className="dropdown-item" onClick={() => deleteGroup(group.idgroup)}>Delete</button>
                                    </div>
                                </div>
                            </div>
                            <div className="card-body bg-dark">
                                <p className="text-light"> Students</p>
                                <Link to={`/group/${group.idgroup}`}>
                                    <button className="groupBtn">
                                        See Group
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
export default GroupCards;