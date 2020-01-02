import React from 'react' ;
import Sidebar from './SidebarAdmin';
import '../style.css';
import { FaRegLightbulb, FaHandPointer, FaHandPeace } from 'react-icons/fa';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { ReactAgenda , guid  } from 'react-agenda';
import MaterialTable from 'material-table';
import axios from 'axios';

export default class Admin extends React.Component{  
  

    state = {
            columns: [
              { title: 'Nom', field: 'username' },
              { title: 'Email', field: 'email'},
              {title: 'Groupe', field:'group',type:'numeric'},
              {title: 'Mot De Passe', field:'password'}
            ], 
            data:[],
          } 
    componentDidMount(){
        axios.get("http://127.0.0.1:8000/studentsList/").then(res=>{
          
          this.setState({
            data:res.data,
          })
        }) 
    }

    render(){
        return(
            <div className="Dash">
                <BrowserRouter>
                    <Sidebar/>
                    <Switch>
                        <Route exact path="/admin">
                            <div className="st-home">
                                <FaRegLightbulb id="tip-icon" size="120"/>
                                    <h1 id="tip-title">One Day .. Two Tips</h1>
                                    <div id="tips-row">
                                        <div id="tip-card-1">
                                            <FaHandPointer id="tip-icon-12" size="50"/>
                                            <h4>​Ask for Help and Offer It as Well</h4>
                                            <p id="tip-paragraph">No one, no matter how talented, can do it all alone. If you need assistance, don't be afraid to ask for it. Realize others may require it too but may hesitate to ask, so offer a hand when you can. </p>
                                        </div>
                                        <div id="tip-card-2">
                                        <FaHandPeace id="tip-icon-12" size="50"/>
                                        <h4>Never Say "It's Not My Job"</h4>
                                        <p id="tip-paragraph">Be ready to pitch in when you are needed. It may involve doing something that isn't in your job description, but you will demonstrate that you are flexible.</p>
                                        </div>
                                    </div>
                        
                        </div>
                        </Route>
                       
                        <Route path="/studentsList">
                            <div id="liste-module-table-container">
                            <MaterialTable
                            title="Liste des etudiants"
                            columns={this.state.columns}
                            data={this.state.data}
                            editable={{
                              onRowAdd: newData =>
                              new Promise(resolve => {
                                setTimeout(() => {
                                  resolve();
                                  this.setState(prevState => {
                                    const data = [...prevState.data];
                                    data.push(newData);
                                    const datax={
                                      username: newData.username,
                                      password : newData.password,
                                      email: newData.email,
                                      group: newData.group
                                    }
                                    axios.post('http://127.0.0.1:8000/createUserv2/',datax).then(res=>{

                                    }).catch(error=>{});
                                    return { ...prevState, data };
                                  });
                                }, 600);
                              }),
                              onRowUpdate: (newData, oldData) =>
                                new Promise(resolve => {
                                setTimeout(() => {
                                resolve();
                                if (oldData) {
                                  this.setState(prevState => {
                                    const data = [...prevState.data];
                                    data[data.indexOf(oldData)] = newData;
                                    return { ...prevState, data };
                                  });
                                }
                                }, 600);
                              }),
                              onRowDelete: oldData =>
                              new Promise(resolve => {
                                setTimeout(() => {
                                  resolve();
                                  this.setState(prevState => {
                                    
                                    const data = [...prevState.data];
                                    data.splice(data.indexOf(oldData), 1);
                                    axios.delete("http://127.0.0.1:8000/userDetails/"+oldData.id+"/").then(res=>{

                                    }).catch(error=>{});
                                    return { ...prevState, data };
                                  });
                                }, 600);
                              }),
                              }}
                              options={{filtering:true}}
                            />
                            </div>
                        </Route>
                    </Switch>
                </BrowserRouter>
            </div>
        );
    }
}


