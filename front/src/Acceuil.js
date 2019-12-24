import React, { Component } from 'react';
import './App.css';
import Typical from 'react-typical';
import ActCard from './Components/ActeursCard';


const acteurs=[
  {type:'Etudiant'},
  {type:'Enseignant'},
  {type:'Administrateur'}
];




class App extends Component {

  render(){
  return (
    <div className="App">
      <header className="App-header">
        <Typical steps={['Bienvenue',1000,'Veuillez choisir votre profil : ',500]}/>
        <div className="ActCardsContainer">
          <ActCard  acteur={acteurs[0]} />
          <ActCard  acteur={acteurs[1]} />
          <ActCard  acteur={acteurs[2]} />
        </div>
      </header>
      </div>
  );};
}

export default App;
