import React, { useState, useEffect } from 'react';
import axios from 'axios';

function CreateEleve({ groupId }) {
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [eleves, setEleves] = useState([]);

    useEffect(() => {
        const fetchEleves = async () => {
            const response = await axios.get(`http://localhost:8181/eleve/read/${groupId}`);
            // Filtrer les élèves en vérifiant que groupe n'est pas null
            setEleves(response.data);
        };

        fetchEleves();
    }, [groupId]);

    const createEleve = async (e) => {
        e.preventDefault();
        await axios.post('http://localhost:8181/eleve/create', {
            firstname,
            lastname,
            groupe: { idgroup: groupId }
        });
        setFirstname("");
        setLastname("");
        // Recharger les élèves après la création
        const response = await axios.get(`http://localhost:8181/eleve/read/${groupId}`);
        setEleves(response.data);
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
                <button type="submit">Créer Élève</button>
            </form>
            <h2>Liste des Élèves</h2>
            <ul>
                {eleves.map((eleve) => (
                    <li key={eleve.idgroup}>
                        {eleve.firstname} {eleve.lastname}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default CreateEleve;