import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Navbar from "../components/Navbar.jsx";
import Sidebar from "../components/Sidebar.jsx";

function StudentPage() {
    const { ideleve } = useParams();
    const [activites, setActivites] = useState([]);

    useEffect(() => {
        fetchActivites();
    }, []);

    const fetchActivites = async () => {
        try {
            const response = await axios.get(`http://localhost:8181/activite/eleve/${ideleve}`);
            setActivites(response.data);
        } catch (error) {
            console.error("Erreur lors du chargement des activités :", error);
        }
    };

    return (
        <div>
            <Navbar />
            <div style={{ display: "flex" }}>
                <Sidebar />
                <div style={{ padding: "20px", flex: 1 }}>
                    <h2>Activités de l'élève {ideleve}</h2>
                    {activites.length > 0 ? (
                        <ul className="list-group">
                            {activites.map((act, index) => (
                                <li key={index} className="list-group-item">
                                    <strong>Catégorie :</strong> {act.categorie.nomcategorie}<br />
                                    <strong>Date :</strong> {new Date(act.date).toLocaleString()}
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p>Aucune activité enregistrée.</p>
                    )}
                </div>
            </div>
        </div>
    );
}

export default StudentPage;
