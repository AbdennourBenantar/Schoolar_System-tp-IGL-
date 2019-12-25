import React from 'react' ;
import Sidebar from './SidebarEtudiant';

import '../App.css';
import { FaRegLightbulb, FaHandPointer, FaPeace, FaHandPeace } from 'react-icons/fa';
export default class Etudiant extends React.Component{
    render(){
        return(
            <div className="Dash">
                    <Sidebar/>
                    <div className="st-home">
                        <FaRegLightbulb id="tip-icon" size="120"/>
                        <h1 id="tip-title">One Day .. Two Tips</h1>
                        <div id="tips-row">
                            <div id="tip-card-1">
                                <FaHandPointer id="tip-icon-12" size="50"/>
                                <h3>Time Management</h3>
                                <p id="tip-paragraph">Be punctual always. Time Management is a must in a students’ life. The purpose of time management is to enable them to do more and better work in less time. Always remember successful students or the students who want to be successful in life manage their time so that they can easily have time to study as well as to play.</p>
                            </div>
                            <div id="tip-card-2">
                                <FaHandPeace id="tip-icon-12" size="50"/>
                                <h3>Keep studies as your first priority</h3>
                                <p id="tip-paragraph">A good student never ignores his studies and Keep their studies on the topmost priority list. Managing time for friends, relatives, and family is also important but not by ignoring your studies because what you have learned will remain lifelong with you.</p>
                            </div>
                        </div>
                        
                    </div>
            </div>
        );
    }
}