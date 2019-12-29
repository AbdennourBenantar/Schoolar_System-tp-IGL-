import React from 'react' ;
import Sidebar from './SidebarEtudiant';
import '../style.css';
import { FaRegLightbulb, FaHandPointer, FaPeace, FaHandPeace } from 'react-icons/fa';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { ReactAgenda , guid  } from 'react-agenda';
import MaterialTable from 'material-table';



require('moment/locale/fr.js');
var colors= {
    'color-1':"rgb(95,158,160)" ,
    'color-2':"rgb(95,188,170)" ,
    'color-3':"rgb(95,158,180)",
    'color-4':"rgb(95,158,190)",
    'color-5':"rgb(95,158,200)",
    'color-6':"rgb(95,158,210)",
    'color-7':"rgb(95,158,220)",
    'color-8':"rgb(95,158,230)",
    
  }
var now = new Date();
var items = [
    {
     _id            :guid(),
      name          : 'TDp IGL ZELLAGUI S - CP1',
      startDateTime : new Date(now.getFullYear(), now.getMonth(), now.getDate(), 9, 0),
      endDateTime   : new Date(now.getFullYear(), now.getMonth(), now.getDate(), 10, 30),
      classes       : 'color-1'
    },
    {
     _id            :guid(),
      name          : 'TP SYC1 BOUZAR L - M2',
      startDateTime : new Date(now.getFullYear(), now.getMonth(), now.getDate(), 10, 40),
      endDateTime   : new Date(now.getFullYear(), now.getMonth(), now.getDate(), 12, 10),
      classes       : 'color-2'
    },
    {
        _id            :guid(),
         name          : 'TD RO MAHIOU R - CP4',
         startDateTime : new Date(now.getFullYear(), now.getMonth(), now.getDate(), 13,0),
         endDateTime   : new Date(now.getFullYear(), now.getMonth(), now.getDate(), 14, 40),
         classes       : 'color-3'
    },
    {
        _id            :guid(),
         name          : 'TD ORG ABDELLAOUI S - S4',
         startDateTime : new Date(now.getFullYear(), now.getMonth(), now.getDate()+1, 10, 40),
         endDateTime   : new Date(now.getFullYear(), now.getMonth(), now.getDate()+1, 12, 10),
         classes       : 'color-4'
       },
       {
        _id            :guid(),
         name          : 'TDp IGL ZELLAGUI S - S9',
         startDateTime : new Date(now.getFullYear(), now.getMonth(), now.getDate()+1, 15, 10),
         endDateTime   : new Date(now.getFullYear(), now.getMonth(), now.getDate()+1, 16, 40),
         classes       : 'color-1'
       },
       {
        _id            :guid(),
         name          : 'TD ANUM BENBOUDJEMAA - S25',
         startDateTime : new Date(now.getFullYear(), now.getMonth(), now.getDate()+3, 13, 0),
         endDateTime   : new Date(now.getFullYear(), now.getMonth(), now.getDate()+3, 15, 0),
         classes       : 'color-5'
       },
       {
        _id            :guid(),
         name          : 'TDp ANG DEBAILI S - S15',
         startDateTime : new Date(now.getFullYear(), now.getMonth(), now.getDate()+3, 15, 10),
         endDateTime   : new Date(now.getFullYear(), now.getMonth(), now.getDate()+3, 16, 40),
         classes       : 'color-6'
       },
       {
        _id            :guid(),
         name          : 'TP SYC1 BOUZAR L - M1',
         startDateTime : new Date(now.getFullYear(), now.getMonth(), now.getDate()+4, 10, 40),
         endDateTime   : new Date(now.getFullYear(), now.getMonth(), now.getDate()+4, 12, 10),
         classes       : 'color-2'
       },
       {
        _id            :guid(),
         name          : 'TD THP KHELIATI L - S6',
         startDateTime : new Date(now.getFullYear(), now.getMonth(), now.getDate()+4, 13, 0),
         endDateTime   : new Date(now.getFullYear(), now.getMonth(), now.getDate()+4, 15, 0),
         classes       : 'color-7'
       },
       {
        _id            :guid(),
         name          : 'TP RESEAU BOUKHADRA A - DPGR',
         startDateTime : new Date(now.getFullYear(), now.getMonth(), now.getDate(), 15, 10),
         endDateTime   : new Date(now.getFullYear(), now.getMonth(), now.getDate(), 17, 10),
         classes       : 'color-8'
       },
   
  ];
export default class Etudiant extends React.Component{  
  
    constructor(props){
        super(props);
          this.state = {
            items:items,
            selected:[],
            cellHeight:35,
            showModal:false,
            locale:"dz",
            rowsPerHour:2,
            numberOfDays:5,
            startDate: new Date(),
            columns: [
              { title: 'Nom du module', field: 'name' },
              { title: 'Enseignant', field: 'teacher'},
              { title: 'Coefficient', field: 'coeff', type: 'numeric'},
            ],
            data: [
              { name: 'Systemes centralisés', teacher: 'BOUZAR L', coeff: 5 },
              { name: 'Introduction au génies logiciels', teacher: 'Mostefai', coeff: 5 },
            ],
          }
          this.handleCellSelection = this.handleCellSelection.bind(this)
          this.handleItemEdit = this.handleItemEdit.bind(this)
          this.handleRangeSelection = this.handleRangeSelection.bind(this) 
        }      
      handleCellSelection(item){
        console.log('handleCellSelection',item)
      }
      handleItemEdit(item){
        console.log('handleItemEdit', item)
      }
      handleRangeSelection(item){
        console.log('handleRangeSelection', item)
      }
    render(){
        return(
            <div className="Dash">
                <BrowserRouter>
                    <Sidebar/>
                    <Switch>
                        <Route exact path="/etudiant">
                            <div className="st-home">
                                <FaRegLightbulb id="tip-icon" size="120"/>
                                    <h1 id="tip-title">One Day .. Two Tips</h1>
                                    <div id="tips-row">
                                        <div id="tip-card-1">
                                            <FaHandPointer id="tip-icon-12" size="50"/>
                                            <h4>Time Management</h4>
                                            <p id="tip-paragraph">Be punctual always. Time Management is a must in a students’ life. The purpose of time management is to enable them to do more and better work in less time. Always remember successful students or the students who want to be successful in life manage their time so that they can easily have time to study as well as to play.</p>
                                        </div>
                                        <div id="tip-card-2">
                                        <FaHandPeace id="tip-icon-12" size="50"/>
                                        <h4>Keep studies as your first priority</h4>
                                        <p id="tip-paragraph">A good student never ignores his studies and Keep their studies on the topmost priority list. Managing time for friends, relatives, and family is also important but not by ignoring your studies because what you have learned will remain lifelong with you.</p>
                                        </div>
                                    </div>
                        
                        </div>
                        </Route>
                        <Route path="/EDT">
                            <div id="agenda-container">
                            <ReactAgenda
                                minDate={now}
                                maxDate={new Date(now.getFullYear(), now.getMonth(),now.getDate()+7)}
                                disablePrevButton={false}
                                startDate={this.state.startDate}
                                cellHeight={this.state.cellHeight}
                                locale={this.state.locale}
                                items={this.state.items}
                                numberOfDays={this.state.numberOfDays}
                                startAtTime={8}
                                endAtTime={17}
                                rowsPerHour={this.state.rowsPerHour}
                                itemColors={colors}
                                autoScale={false}
                                fixedHeader={true}
                                onItemEdit={this.handleItemEdit.bind(this)}
                                onCellSelect={this.handleCellSelection.bind(this)}
                                onRangeSelection={this.handleRangeSelection.bind(this)}/>
                            </div>
                        </Route>
                        <Route path="/listeModules">
                            <div id="liste-module-table-container">
                            <MaterialTable
                            title="Liste des modules"
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
                            />
                            </div>
                        </Route>
                    </Switch>
                </BrowserRouter>
            </div>
        );
    }
}


