import React from 'react';
import '../App.css'; 
import {FaHome,FaCalendarAlt,FaBook} from 'react-icons/fa';

export default class Sidebar extends React.Component{
    render(){
        return(
            <div className="sidebarContainer">
                    <img className="avatar-profile" src={require('../assets/Bgs/av_st.png')} alt="avatar"/>
                    <h4 className="name">Benantar Abdenour</h4>
                    <h5 className="annee">1CS - SIT</h5>
                    <div className="sidebar-Item">
                        <FaHome size="40"/>
                        <p>Acceuil</p>
                    </div>
                    <div className="sidebar-Item">
                        <FaCalendarAlt size="40"/>
                        <p>Emploi du temps</p>
                    </div>
                    <div className="sidebar-Item">
                        <FaBook size="40"/>
                        <p>Liste des modules</p>
                    </div>
                    <a href="http://www.esi.dz" target="_blank">ESI -2019/2020</a>
            </div>
        );
    };
}