import React, { useState } from "react";
import axios from "axios";
import "./Login.css"
import Navbar from '../components/Navbar';
import {Link, useNavigate} from "react-router-dom";


function Login() {
    const navigate = useNavigate();
    const [fullname, setFullname] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleLogin = async () => {
        const response = await axios.get(`http://localhost:8181/prof/login/${fullname}/${password}`);
        if (response.data) {
            localStorage.setItem("profId", response.data.idprof);
            navigate("/home");
        } else {
            setError("Invalid credentials.");
        }
    };

    return (
        <div className="background">
            <Navbar/>
            <div className="container mt-5 login-form">
                <h2 className="title">Login Page</h2>
                {error && <div className="alert alert-danger">{error}</div>}
                <div>
                    <label htmlFor="fullname" className="form-label">Username</label>
                    <input
                        type="text"
                        className="form-control"
                        id="fullname"
                        value={fullname}
                        onChange={(e) => setFullname(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input
                        type="password"
                        className="form-control"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button onClick={handleLogin} id="loginBtn" className="btn btn-primary">Log in</button>
                <Link to={`/signUp/`}>
                    <button className="btn btn-outline-light">Sign up</button>
                </Link>
            </div>
        </div>

    );
}

export default Login;