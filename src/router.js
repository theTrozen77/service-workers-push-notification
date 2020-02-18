import { Route, Link, Switch} from 'react-router-dom';
import React from 'react';
import Dashboard from './component/dashboard';
import Login from './component/login';
import Register from './component/register';
const Router  = () => {
    return(
    <Switch>
        <Route exact path = '/login' component = {Login} />
        <Route exact path = '/register' component = {Register} />
        <Route exact path = '/dashboard' component = {Dashboard} />
    </Switch>
)}    

export default Router;