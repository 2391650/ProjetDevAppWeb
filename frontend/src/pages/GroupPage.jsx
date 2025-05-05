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
                            Activities
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default GroupPage;