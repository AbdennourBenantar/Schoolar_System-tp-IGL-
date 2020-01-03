import React from 'react';
import '../style.css'; 
import {FaHome, FaList} from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default class Sidebar extends React.Component{
    
    render(){
        return(
            <div className="sidebarContainer">
                    <img className="avatar-profile" src={require('../../assets/Bgs/av-admin.png')} alt="avatar"/>
                    <h4 className="name">Benantar Abdenour</h4>
                    <h5 className="annee">1CS - SIT</h5>
                    <Link to="/admin" >
                    <div className="sidebar-Item">
                        <FaHome size="45"/>
                        <p>Acceuil</p>           
                    </div>
                    </Link>
                    <Link to="/studentsList">
                    <div id="Students-List" className="sidebar-Item">  
                        <FaList size="40"/>
                        <p>Liste des Etudiants</p>      
                    </div>
                    </Link>
                   
                    <a id="esi-link" href="http://www.esi.dz" target="_blank">ESI -2019/2020</a>
            </div>
        );
    };
}