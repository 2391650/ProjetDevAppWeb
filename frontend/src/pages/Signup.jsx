import React, { useState } from "react";
import axios from "axios";
import {Link, useNavigate} from "react-router-dom";
import Navbar from '../components/Navbar';


function Signup() {
    const [prof, setProf] = useState({
        fullname: "",
        passwd: "",
    });

    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleChange = (e) => {
        setProf({ ...prof, [e.target.name]: e.target.value });
    };

    const existDeja = async (fullname) => {
        const result = await axios.get(`http://localhost:8181/prof/findByFullname/${fullname}`);
        return !result.data;
    };

    const createProf = async () => {
        await axios.post("http://localhost:8181/prof/create", prof);
        navigate("/");
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const isAvailable = await existDeja(prof.fullname);
        if (isAvailable) {
            createProf();
        } else {
            setError("Nom d'utilisateur déjà pris");
        }
    };

    return (
        <div className="background">
            <Navbar/>
            <div className="container login-form mt-5">
                <h2 className="title">Sign up Page</h2>
                {error && <div className="alert alert-danger">{error}</div>}
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="username" className="form-label">Username</label>
                        <input
                            type="text"
                            className="form-control"
                            name="username"
                            id="username"
                            required
                            onChange={handleChange}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="fullname" className="form-label">Full Name</label>
                        <input
                            type="text"
                            className="form-control"
                            name="fullname"
                            id="fullname"
                            required
                            onChange={handleChange}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="passwd" className="form-label">Password</label>
                        <input
                            type="password"
                            className="form-control"
                            name="passwd"
                            id="passwd"
                            required
                            onChange={handleChange}
                        />
                    </div>
                    <button type="submit" id="signupBtn" className="btn btn-primary">Sign up</button>
                </form>
                <Link to={`/`}>
                    <button className="btn btn-outline-light">
                        Log in
                    </button>
                </Link>
            </div>
        </div>

    );
}

export default Signup;