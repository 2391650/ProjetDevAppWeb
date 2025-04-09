import React from 'react';
import Navbar from '../components/Navbar';
import Cards from '../components/Cards';
import Sidebar from '../components/Sidebar';
import './Home.css'
import {Link} from "react-router-dom";

function Home() {
  return (
    <div>
      <Navbar />
      <div style={{ display: "flex" }}>
        <Sidebar />

        <div className='background' >
            <Link to={"/CreateGroup"}>
                <h1 className="addGroup">
                    +
                </h1>
            </Link>
            <Cards/>
        </div>
      </div>
    </div>
  );
}

export default Home;