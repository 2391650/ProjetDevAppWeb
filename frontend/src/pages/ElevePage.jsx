import React from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import GroupPage from "./GroupPage.jsx";
import './ElevePage.css'

function ElevePage() {
    return (
        <div>
            <Navbar />
            <div style={{ display: "flex" }}>
                <Sidebar />

                <div className='background' >
                    <GroupPage/>

                </div>
            </div>
        </div>
    );
}

export default ElevePage;