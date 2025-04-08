import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import CreateEleve from './CreateEleve';

function GroupPage() {
    const { id } = useParams();
    const [eleves, setEleves] = useState([]);

    useEffect(() => {
        fetchEleves();
    }, []);

    const fetchEleves = async () => {
        // Remplacez par l'API qui renvoie les élèves du groupe
        const response = await axios.get(`http://localhost:8080/eleve/read`);
        setEleves(response.data.filter(eleve => eleve.groupe.idgroup === parseInt(id)));
    };

    return (
        <div>
            <h1>Élèves du Groupe</h1>
            <CreateEleve groupId={id} fetchEleves={fetchEleves} />
            <div>
                {eleves.map((eleve) => (
                    <div key={eleve.ideleve}>
                        <h3>{eleve.firstname} {eleve.lastname}</h3>
                        {/* Ajoutez des boutons pour modifier et supprimer */}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default GroupPage;