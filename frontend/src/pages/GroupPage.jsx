import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import CreateEleve from './CreateEleve';
import "./GroupePage.css";
import Navbar from "../components/Navbar.jsx";
import Sidebar from "../components/Sidebar.jsx";

function GroupPage() {
    const { id } = useParams();
    const [eleves, setEleves] = useState([]);

    useEffect(() => {
        fetchEleves();
    }, []);

    const fetchEleves = async () => {
        const response = await axios.get(`http://localhost:8181/eleve/read/`);
        setEleves(response.data);
    };


    return (
        <div>
            <Navbar/>
            <div style={{display: "flex"}}>
                <Sidebar/>
                <div className='background'>
                    <div className="liste-activity">
                        <div className="liste-eleves">
                            <h1>Group</h1>
                            <CreateEleve groupId={id} fetchEleves={fetchEleves}/>
                            <div>
                                {eleves.map((eleve) => (
                                    <div key={eleve.ideleve}>
                                        <h3>{eleve.firstname} {eleve.lastname}</h3>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="activity">
                            <button className="ajout-activite" data-toggle="modal" data-target="#activiteModal">
                                +
                            </button>
                            {/*<div className="modal fade" id="activiteModal" tabIndex="-1" role="dialog"*/}
                            {/*     aria-labelledby="exampleModalLabel"*/}
                            {/*     aria-hidden="true">*/}
                            {/*    <div className="modal-dialog" role="document">*/}
                            {/*        <div className="modal-content">*/}
                            {/*            <div className="modal-header">*/}
                            {/*                <h5 className="modal-title" id="exampleModalLabel">Create Student</h5>*/}
                            {/*                <button type="button" className="close" data-dismiss="modal"*/}
                            {/*                        aria-label="Close">*/}
                            {/*                    <span aria-hidden="true">&times;</span>*/}
                            {/*                </button>*/}
                            {/*            </div>*/}
                            {/*            <div className="modal-body">*/}
                            {/*                <form onSubmit={createEleve}>*/}
                            {/*                    <input*/}
                            {/*                        type="text"*/}
                            {/*                        value={firstname}*/}
                            {/*                        onChange={(e) => setFirstname(e.target.value)}*/}
                            {/*                        placeholder="first name"*/}
                            {/*                        required*/}
                            {/*                    />*/}
                            {/*                    <input*/}
                            {/*                        type="text"*/}
                            {/*                        value={lastname}*/}
                            {/*                        onChange={(e) => setLastname(e.target.value)}*/}
                            {/*                        placeholder="Last name"*/}
                            {/*                        required*/}
                            {/*                    />*/}
                            {/*                    <button type="submit">Create Student</button>*/}
                            {/*                </form>*/}
                            {/*            </div>*/}
                            {/*        </div>*/}
                            {/*    </div>*/}
                            {/*</div>*/}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default GroupPage;