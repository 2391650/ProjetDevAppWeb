import React, { useState, useEffect } from 'react';
import axios from 'axios';
import dots from "../assets/images/dots.png";
import "./CreateEleve.css"
import {Link} from "react-router-dom";

function CreateEleve({ groupId }) {
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [eleves, setEleves] = useState([]);

    useEffect(() => {
        fetchEleves();
    }, [groupId]);

    const fetchEleves = async () => {
        const response = await axios.get(`http://localhost:8181/eleve/read/${groupId}`);
        setEleves(response.data);
    };

    const createEleve = async (e) => {
        e.preventDefault();
        await axios.post('http://localhost:8181/eleve/create', {
            firstname,
            lastname,
            groupe: { idgroup: groupId }
        });
        setFirstname("");
        setLastname("");
        const response = await axios.get(`http://localhost:8181/eleve/read/${groupId}`);
        setEleves(response.data);
        console.log(response.data)
    };

    const deleteEleve = async (ideleve) => {
        await axios.delete(`http://localhost:8181/eleve/delete/${ideleve}`);
        fetchEleves();
    };

    return (
        <div>
            <button className="ajout-eleves" data-toggle="modal" data-target="#eleveModal">
                +
            </button>
            <div className="modal fade" id="eleveModal" tabIndex="-1" role="dialog"
                 aria-labelledby="exampleModalLabel"
                 aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Create Student</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <form onSubmit={createEleve}>
                                <input
                                    type="text"
                                    value={firstname}
                                    onChange={(e) => setFirstname(e.target.value)}
                                    placeholder="first name"
                                    required
                                />
                                <input
                                    type="text"
                                    value={lastname}
                                    onChange={(e) => setLastname(e.target.value)}
                                    placeholder="Last name"
                                    required
                                />
                                <button type="submit">Create Student</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <ul>
                {eleves.map((eleve) => (
                    <li key={eleve.idgroup}>
                        {eleve.firstname} {eleve.lastname}
                        <div className="dropdown mr-1" style={{display:"inline-block"}}>
                            <button type="button" className="btn"
                                    id="dropdownMenuOffset" data-toggle="dropdown" aria-haspopup="false"
                                    aria-expanded="false" data-offset="10,10">
                                <img src={dots} style={{height: "30px"}}/>
                            </button>
                            <div className="dropdown-menu">
                                <Link to={`/eleve/${eleve.ideleve}`} className="btn btn-sm btn-info">
                                    View Student
                                </Link>
                                <button className="dropdown-item"
                                        onClick={() => deleteEleve(eleve.ideleve)}>Delete
                                </button>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default CreateEleve;