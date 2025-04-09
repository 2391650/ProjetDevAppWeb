import React, { useState, useEffect } from 'react';
import axios from 'axios';
import red from '../assets/images/redWaves.png';
import blue from '../assets/images/blueWaves.png';
import yellow from '../assets/images/yellowWaves.png';
import purple from '../assets/images/purpleWaves.png';
import pink from '../assets/images/pinkWaves.png';
import green from '../assets/images/greenWaves.png';

function CreateGroup() {
    const [groups, setGroups] = useState([]);
    const [nomGroupe, setNomGroupe] = useState("");

    useEffect(() => {
        fetchGroups();
    }, []);

    const fetchGroups = async () => {
        const response = await axios.get('http://localhost:8181/groupe/read');
        setGroups(response.data);
    };

    const createGroup = async (e) => {
        e.preventDefault();
        await axios.post('http://localhost:8181/groupe/create', { nomGroupe });
        setNomGroupe("");
        fetchGroups();
    };

    const deleteGroup = async (nom) => {
        await axios.delete(`http://localhost:8181/groupe/delete/${nom}`);
        fetchGroups();
    };

    return (
        <div>


            <h1>Groupes</h1>
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
            <div className="row" style={{ marginTop: "20px" }}>
                {groups.map((group, index) => (
                    <div className="col-lg-4 col-md-6 col-sm-12" key={group.idgroup}>
                        <div className="card" style={{ marginTop: "20px" }}>
                            <img
                                src={[green, blue, pink, red, purple, yellow][index % 6]}
                                alt={group.nomGroupe}
                                style={{ objectFit: "cover", height: "200px", width: "100%" }}
                            />
                            <h5 className="card-title text-light" style={{ position: "absolute", fontSize: "20px", top: "50px", left: "10px" }}>{group.nomGroupe}</h5>
                            <div className="card-body bg-dark">
                                <p className="text-light"> Étudiants</p>

                                <i className="bi bi-trash" >
                                    <button onClick={() => deleteGroup(group.nomGroupe)}></button>
                                </i>
                                <a href={`/group/${group.idgroup}`} className="btn btn-primary">Voir Élèves</a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default CreateGroup;