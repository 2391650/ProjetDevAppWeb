import React from 'react';
import Navbar from '../components/Navbar';
import Cards from '../components/Cards';
import Sidebar from '../components/Sidebar';

function Home() {
  return (
    <div>
      <Navbar />
      <div style={{ display: "flex" }}>
        <Sidebar />
        <div className='background' >
          <Cards />
        </div>
      </div>
    </div>
  );
}

export default Home;