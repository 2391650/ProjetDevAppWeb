import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import CreateEleve from './CreateEleve';
import "../css/GroupPage.css";
import Navbar from "../components/Navbar.jsx";
import Sidebar from "../components/Sidebar.jsx";

function GroupPage() {
    const { id } = useParams();
    const [eleves, setEleves] = useState([]);
    const [categories, setCategories] = useState([]);
    const [activites, setActivites] = useState([]);
    const [nomCategorie, setNomCategorie] = useState("");
    const [actuelleCategorieId, setActuelleCategorieId] = useState(null);

    useEffect(() => {
        if (id) {
            fetchEleves();
            fetchCategories();
            fetchActivites();
        }
    }, [id]);

    const fetchEleves = async () => {
        try {
            const response = await axios.get(`http://localhost:8181/eleve/read/${id}`);
            setEleves(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    const fetchCategories = async () => {
        try {
            const response = await axios.get(`http://localhost:8181/categorie/groupe/${id}`);
            setCategories(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    const fetchActivites = async () => {
        try {
            const response = await axios.get("http://localhost:8181/activite/read");
            setActivites(response.data);
        } catch (error) {
            console.error("Erreur lors du chargement des activités :", error);
        }
    };

    const createCategorie = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:8181/categorie/create", {
                nomcategorie: nomCategorie,
                groupe: { idgroup: parseInt(id) }  // Envoie le groupe associé
            });
            await fetchEleves();
            setCategories(prev => [...prev, response.data]);
            setNomCategorie("");
        } catch (error) {
            console.error(error);
        }
    };

    const createActivite = async (eleveId) => {
        try {
            await axios.post("http://localhost:8181/activite/historique", {
                eleve: { ideleve: eleveId },
                categorie: { idcategorie: actuelleCategorieId },
                date: new Date()
            });
            await fetchActivites();
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div>
            <Navbar />
            <div style={{ display: "flex" }}>
                <Sidebar />
                <div className='background'>
                    <div className="liste-activity">
                        <div className="liste-eleves">
                            <h1>Group</h1>
                            <CreateEleve groupId={id} fetchEleves={fetchEleves} />
                        </div>

                        <div className="activity">
                            <form onSubmit={createCategorie} className="mb-4 category-form">
                                <input
                                    type="text"
                                    value={nomCategorie}
                                    onChange={(e) => setNomCategorie(e.target.value)}
                                    placeholder="Category Name"
                                    required
                                />
                                <button type="submit">Create Category</button>
                            </form>
                            <div className="row">
                                {categories.map((categorie) => (
                                    <div className="col-md-4 mb-4" key={categorie.idcategorie}>
                                        <div className="cardCat">
                                            <div className="card-body">
                                                <h5>{categorie.nomcategorie}</h5>
                                                <ul>
                                                    {activites
                                                        .filter(act => act.categorie.idcategorie === categorie.idcategorie)
                                                        .map((act, idx) => (
                                                            <li key={idx}>
                                                                {act.eleve.firstname} {act.eleve.lastname} – {new Date(act.date).toLocaleString()}
                                                            </li>
                                                        ))}
                                                </ul>
                                                <button
                                                    className="btn btn-primary mt-2"
                                                    data-toggle="modal"
                                                    data-target="#activiteModal"
                                                    onClick={() => setActuelleCategorieId(categorie.idcategorie)}
                                                >
                                                    Add Student
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="modal fade" id="activiteModal" tabIndex="-1" role="dialog"
                                 aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div className="modal-dialog" role="document">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h5 className="modal-title" id="exampleModalLabel">List of Students</h5>
                                            <button type="button" className="close" data-dismiss="modal"
                                                    aria-label="Close">
                                                <span aria-hidden="true">&times;</span>
                                            </button>
                                        </div>
                                        <div className="modal-body">
                                            <ul>
                                                {eleves.map((eleve) => (
                                                    <li key={eleve.ideleve}>
                                                        <button
                                                            onClick={() => createActivite(eleve.ideleve)}
                                                            className="btn"
                                                        >
                                                            {eleve.firstname} {eleve.lastname}
                                                        </button>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default GroupPage;
