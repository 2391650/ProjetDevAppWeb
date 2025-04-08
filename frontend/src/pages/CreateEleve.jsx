import React, { useState } from 'react';
import axios from 'axios';

function CreateEleve({ groupId, fetchEleves }) {
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");

    const createEleve = async (e) => {
        e.preventDefault();
        await axios.post('http://localhost:8181/eleve/create', {
            firstname,
            lastname,
            groupe: { idgroup: groupId }
        });
        setFirstname("");
        setLastname("");
        fetchEleves();
    };

    return (
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
    );
}

export default CreateEleve;