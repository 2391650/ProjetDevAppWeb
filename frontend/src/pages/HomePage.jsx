import React from 'react';
import Navbar from "../components/Navbar.jsx";
import "../css/HomePage.css"
import logo from "../assets/images/HopQuest_Logo.png";
import {Link} from "react-router-dom";

function HomePage() {
    return (
        <div>
            <Navbar/>
            <div style={{display: "flex"}}>
                <div className='background'>
                    <div className="main-div">
                        <img className="main-logo" src={logo}></img>
                        <h1 className="welcome text-center">Welcome to HopQuest</h1>
                        <Link to={`/signup`}>
                            <button className="start">
                                Let's get started
                            </button>
                        </Link>
                        <p>or</p>
                        <Link to={`/login`}>
                            <button className="btn text-info">
                                Log in Here
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomePage;