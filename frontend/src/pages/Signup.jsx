import React, { useState } from "react";
import axios from "axios";
import {Link, useNavigate} from "react-router-dom";
import Navbar from '../components/Navbar';

// @author Tarek
function Signup() {
    const [prof, setProf] = useState({
        username: "",
        passwd: "",
    });

    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleChange = (e) => {
        setProf({ ...prof, [e.target.name]: e.target.value });
    };

    const existDeja = async (username) => {
        const result = await axios.get(`http://localhost:8181/prof/findByUsername/${username}`);
        return !result.data;
    };

    const createProf = async () => {
        await axios.post("http://localhost:8181/prof/create", prof);
        navigate("/login");
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const isAvailable = await existDeja(prof.username);
        if (isAvailable) {
            createProf();
        } else {
            setError("Username is in use.");
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
                <p className="or">Already have an account?</p>
                <Link to={`/login`}>
                    <button className="btn text-info login-option">
                        Log in
                    </button>
                </Link>
            </div>
        </div>

    );
}

export default Signup;