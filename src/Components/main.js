import React from 'react';
import LandingPage from './landingPage';
import About from './about';
import Skills from './skills';
import Contact from './contact';
import Projects from './projects';
import {Switch, Route} from 'react-router-dom';

const Main = () => (
    <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route  path="/" component={About} />
        <Route  path="/" component={Skills} />
        <Route  path="/" component={Contact} />
        <Route  path="/" component={Projects} />
    </Switch>
)

export default Main;