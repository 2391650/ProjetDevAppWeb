import React, { useState, useEffect } from 'react';
import axios from 'axios';

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
            <div>
                {groups.map((group) => (
                    <div key={group.idgroup}>
                        <h3>{group.nomGroupe}</h3>
                        <button onClick={() => deleteGroup(group.nomGroupe)}>Supprimer</button>
                        <a href={`/group/${group.idgroup}`}>Voir Éléves</a>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default CreateGroup;