import React from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';

function Group() {
    return (
        <div>
            <Navbar />
            <div style={{ display: "flex" }}>
                <Sidebar />
                <div className='background' >
                </div>
            </div>
        </div>
    );
}

export default Group;