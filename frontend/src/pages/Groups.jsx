import React from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import GroupCards from "../components/GroupCards.jsx";
import '../css/Groups.css'
import {useNavigate} from "react-router-dom";

function Groups() {
    const navigate = useNavigate();

    // vérifie si le prof est connecté ou pas
    const localId = localStorage.getItem("profId");
    if (!localId) {
        navigate("/login"); // si pas connecté reste bloqué sur la page login
    }

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

export default Groups;