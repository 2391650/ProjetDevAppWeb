import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


function Signup() {
    const [prof, setProf] = useState({
        firstname: "",
        lastname: "",
        passwd: "",
    });

    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleChange = (e) => {
        setProf({ ...prof, [e.target.name]: e.target.value });
    };

    const existDeja = async (firstname) => {
        const result = await axios.get(`http://localhost:8181/prof/findByFirstname/${firstname}`);
        return !result.data;
    };

    const createProf = async () => {
        try {
            await axios.post("http://localhost:8181/prof/create", prof);
            navigate("/login");
        } catch (error) {
            setError("Erreur lors de la création du compte");
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const isAvailable = await existDeja(prof.firstname);
        if (isAvailable) {
            createProf();
        } else {
            setError("Nom d'utilisateur déjà pris");
        }
    };

    return (
        <div className="container inscription mt-5">
            <h2>Inscription Professeur</h2>
            {error && <div className="alert alert-danger">{error}</div>}
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="firstname" className="form-label">Nom d'utilisateur</label>
                    <input
                        type="text"
                        className="form-control"
                        name="firstname"
                        id="firstname"
                        placeholder="Nom d'utilisateur"
                        required
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="lastname" className="form-label">Nom</label>
                    <input
                        type="text"
                        className="form-control"
                        name="lastname"
                        id="lastname"
                        placeholder="Nom"
                        required
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="passwd" className="form-label">Mot de passe</label>
                    <input
                        type="password"
                        className="form-control"
                        name="passwd"
                        id="passwd"
                        placeholder="Mot de passe"
                        required
                        onChange={handleChange}
                    />
                </div>
                <button type="submit" className="btn btn-primary">S'inscrire</button>
            </form>
        </div>
    );
}

export default Signup;