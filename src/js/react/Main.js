import React from 'react';
import { Switch, Route } from 'react-router-dom';
import CounterRed from './CounterRed';
import CounterBlue from './CounterBlue';
import Nav from './Nav';
import Home from './Home';

const Main = () => (
    <div>
        <Switch>
            <Route exact path = '/' component = { Home }/>
            <Route path = '/red' component = { CounterRed }/>
            <Route path = '/blue' component = { CounterBlue }/>
        </Switch>
    </div>
)

export default Main;