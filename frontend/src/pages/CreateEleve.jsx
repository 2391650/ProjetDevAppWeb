import React, { useState, useEffect } from 'react';
import axios from 'axios';

function CreateEleve({ groupId }) {
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [eleves, setEleves] = useState([]);
    //a voir comment juste avoir un objet avec tt les attributs

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
            <form onSubmit={createEleve}>
                <input
                    type="text"
                    value={firstname}
                    onChange={(e) => setFirstname(e.target.value)}
                    placeholder="Prénom"
                    required
                />
                <input
                    type="text"
                    value={lastname}
                    onChange={(e) => setLastname(e.target.value)}
                    placeholder="Nom"
                    required
                />
                <button type="submit">Create Élève</button>
            </form>
            <h2>Liste des Élèves</h2>
            <ul>
                {eleves.map((eleve) => (
                    <li key={eleve.idgroup}>
                        {eleve.firstname} {eleve.lastname}
                        <button onClick={() => deleteEleve(eleve.ideleve)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default CreateEleve;