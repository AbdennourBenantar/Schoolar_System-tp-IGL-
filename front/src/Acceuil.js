import React, { Component } from 'react';
import './App.css';
import Typical from 'react-typical';
import ActCard from './Components/ActeursCard';
import Login from './Components/login_compo/login';
import {BrowserRouter,Route,Switch,Link} from 'react-router-dom';
import Etudiant from './Components/Etudiant/Etudiant';
import Admin from './Components/Admin/Admin';
import {ProtectedRouter} from './Components/ProtectedRouter';


const acteurs=[
  {type:'Etudiant'},
  {type:'Enseignant'},
  {type:'Administrateur'}
];


const sauv=(<header className="App-header">
<Typical steps={['Bienvenue',1000,'Veuillez choisir votre profil : ',500]}/>
<div className="ActCardsContainer">
  <ActCard  acteur={acteurs[0]} />
  <ActCard  acteur={acteurs[1]} />
  <ActCard  acteur={acteurs[2]} />
</div>
</header>);

class App extends Component {

  render(){
  return (
   <BrowserRouter>
    <Route className='page' exact path='/' component={Login}/>
    <ProtectedRouter component={Admin} className='page' exact path='/admin'/>
  </BrowserRouter>
  );};
}

export default App;
