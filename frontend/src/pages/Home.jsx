import React from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import GroupCards from "../components/GroupCards.jsx";
import './Home.css'

function Home() {
  return (
    <div>
      <Navbar />
      <div style={{ display: "flex" }}>
        <Sidebar />

        <div className='background' >
            <GroupCards/>
        </div>
      </div>
    </div>
  );
}

export default Home;