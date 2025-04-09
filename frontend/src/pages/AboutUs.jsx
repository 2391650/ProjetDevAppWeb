import React from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import logo from '../assets/images/HopQuest_Logo.png';
import './AboutUs.css';

function AboutUs() {
    return (
        <div>
            <Navbar />
            <div style={{ display: "flex" }}>
                <Sidebar />
                <div className='background'>
                    <h1 style={{textAlign:"center", paddingTop:'100px', fontSize:'10vh', fontStyle:"bold"}}>About Us</h1>
                    <div className='content'>
                        <div>
                            <img src={logo} style={{width:"200px", float:"left", marginRight:"60px"}}></img>
                        </div>
                        <div>
                            <p style={{textAlign:"justify", marginLeft:"200px"}}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis autem, incidunt rem dicta at error, earum deserunt ut tenetur reprehenderit quas dignissimos ipsa vitae dolorem officiis, possimus vel et magni? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis autem, incidunt rem dicta at error, earum deserunt ut tenetur reprehenderit quas dignissimos ipsa vitae dolorem officiis, possimus vel et magni? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis autem, incidunt rem dicta at error, earum deserunt ut tenetur reprehenderit quas dignissimos ipsa vitae dolorem officiis, possimus vel et magni? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis autem, incidunt rem dicta at error, earum deserunt ut tenetur reprehenderit quas dignissimos ipsa vitae dolorem officiis, possimus vel et magni?</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutUs;