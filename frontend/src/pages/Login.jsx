import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


function Login() {
    const navigate = useNavigate();
    const [firstname, setFirstname] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleLogin = async () => {
        try {
            const response = await axios.get(`http://localhost:8181/prof/login/${firstname}/${password}`);
            if (response.data) {
                localStorage.setItem("profId", response.data.idprof);
                navigate("/home");
            } else {
                setError("Identifiants invalides");
            }

            // eslint-disable-next-line no-unused-vars
        } catch (error) {
            setError("Erreur lors de la connexion");
        }
    };

    return (
        <div className="container mt-5">
            <h2>Page de Connexion Professeur</h2>
            {error && <div className="alert alert-danger">{error}</div>}
            <div className="mb-3">
                <label htmlFor="firstname" className="form-label">Nom d'utilisateur</label>
                <input
                    type="text"
                    className="form-control"
                    id="firstname"
                    placeholder="Nom d'utilisateur"
                    value={firstname}
                    onChange={(e) => setFirstname(e.target.value)}
                    required
                />
            </div>
            <div className="mb-3">
                <label htmlFor="password" className="form-label">Mot de passe</label>
                <input
                    type="password"
                    className="form-control"
                    id="password"
                    placeholder="Mot de passe"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
            </div>
            <button onClick={handleLogin} className="btn btn-primary">Se connecter</button>
        </div>
    );
}

export default Login;