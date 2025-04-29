import React from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Signup from "./Signup.jsx";
import './Sign.css'

function Sign() {
    return (
        <div>
            <Navbar />
            <div style={{ display: "flex" }}>
                <Sidebar />

                <div className='background' >
                    <Signup/>
                </div>
            </div>
        </div>
    );
}

export default Sign;