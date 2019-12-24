import React, { Component } from 'react';
import './App.css';
import Typical from 'react-typical';
import ActCard from './Components/ActeursCard';
import {Route, Link, BrowserRouter, Switch, Redirect} from 'react-router-dom'
import Enseignant from './Enseignant';
import Etudiant from './Etudiant';
import Admin from './Admin';
const acteurs=[
  {type:'Etudiant'},
  {type:'Enseignant'},
  {type:'Administrateur'}
];


class App extends Component {

  render(){
  return (
  <BrowserRouter>
    <div className="App">
      <header className="App-header">
        <Typical steps={['Bienvenue',1000,'Veuillez choisir votre profil : ',500]}/>
        <div className="ActCardsContainer">
          
          <Link to='/Etudiant'>
          <ActCard  acteur={acteurs[0]} />
          </Link>
          <Link to='/Enseignant'>
          <ActCard  acteur={acteurs[1]} />
          </Link>
          <Link to='/Admin'>
          <ActCard  acteur={acteurs[2]} />
          </Link>
          <Switch>
            <Route path='/Etudiant' component={Etudiant} />
            <Route path='/Enseignant' component={Enseignant} />
            <Route path='/Admin' component={Admin}/>
          </Switch>
          
        </div>
      </header>
      </div>
     </BrowserRouter>
  );};
}

export default App;
