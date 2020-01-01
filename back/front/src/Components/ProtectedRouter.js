import React, { Component } from 'react';
import {Route, Redirect} from 'react-router-dom';
import auth from './login_compo/auth';
export const ProtectedRouter=({component:Component,...rest})=>{
    var compo;
    if(auth.isAuthentificated)
{
    compo=<Component />
}
else{
    compo=<Redirect to={
       { pathname :"/login",
         state:{
             from: ""
         }
        }
}/>

}
    return (
        <Route {...rest}>
        {compo}
         </Route>
    
    );
}
