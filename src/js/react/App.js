import React from 'react';
import { Switch, Route } from 'react-router-dom';
import CounterRed from './CounterRed';
import CounterBlue from './CounterBlue';
import Nav from './Nav';
import Home from './Home';

const App = () => (
    <div>
        <Switch>
            <Route exact path = '/' render = { ( props ) => ( <Home {...props} />) }/>   
            <Route path = '/red' render = { ( props ) => ( <CounterRed {...props} />) } /> 
            <Route path = '/blue' render = { ( props ) => ( <CounterBlue {...props} />) } />
        </Switch>
    </div>
)

export default App;