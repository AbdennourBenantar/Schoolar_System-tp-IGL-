import React from 'react';
import '../App.css';

function ActCard(props){

    return(
        <div  className="card">
            <img className="avatar" src={require('../assets/Bgs/av_st.png')} alt='avatar' />
            <div className="actTypeContainer">
                <h4><b>{props.acteur.type}</b></h4>
            </div>
        </div>
    );
}

export default ActCard;