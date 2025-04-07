import React from 'react';
import Navbar from '../components/Navbar';
import Cards from '../components/Cards';
import Footer from '../components/Footer';
import Sidebar from '../components/Sidebar';

function Home() {
    return (
        <div>
            <Navbar/>
            <div style={{ display: "flex" }}>
                  <Sidebar />
                  <div style={{ flex: 1, padding: "20px" }}>
                    <Cards/>
                  </div>
                </div>
        </div>
    );
}

export default Home;