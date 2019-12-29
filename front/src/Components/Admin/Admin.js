import React from 'react' ;
import Sidebar from './SidebarAdmin';
import '../style.css';
import { FaRegLightbulb, FaHandPointer, FaHandPeace } from 'react-icons/fa';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { ReactAgenda , guid  } from 'react-agenda';
import MaterialTable from 'material-table';

export default class Admin extends React.Component{  
  
    constructor(props){
        super(props);
          this.state = {
            columns: [
              { title: 'Nom', field: 'name' },
              { title: 'Prenom', field: 'fname'},
              { title: 'Année', field: 'year',lookup:{
                  1: '1CP',
                  2: '2CP',
                  3: '1CS',
                  4: '2CS',
                  5: '3CS',
              }},
              {title: 'Groupe', field:'group',type:'numeric'},
              {title: 'Moyenne', field:'average',type:'numeric'}
            ],
            data: [
              { name: 'Benantar', fname: 'Abdennour', year:3, group:1,average:13 },
              { name: 'Tlili', fname: 'Abd Erahmene', year:3, group:2,average:12 },  
              { name: 'Bsfds', fname: 'Asdff', year:1, group:8,average:18 },  
              { name: 'dfgfdg', fname: 'dfgdfgur', year:5, group:5,average:10 },
              { name: 'ghjghjd', fname: 'fjjour', year:4, group:8,average:13 },
              { name: 'fhdfdfh', fname: 'Afghg', year:2, group:1,average:13 },
            ],
          }
         
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


