import React from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Login from "./Login.jsx";
import './Sign.css'

function Signin() {
    return (
        <div>
            <Navbar />
            <div style={{ display: "flex" }}>
                <Sidebar />

                <div className='background' >
                  <Login/>
                </div>
            </div>
        </div>
    );
}

export default Signin;