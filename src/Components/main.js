import React from 'react';
import LandingPage from './landingPage';
import About from './about';
import Skills from './skills';
import Contact from './contact';
import {Switch, Route} from 'react-router-dom';

const Main = () => (
    <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route  path="/about" component={About} />
        <Route  path="/skills" component={Skills} />
        <Route  path="/contact" component={Contact} />
    </Switch>
)

export default Main;