import React from 'react';
import { Router, Switch, Route } from "react-router-dom";
import AboutMe from "./AboutMe";
import Contact from "./Contact";
import Projects from "./Projects";
import InProgress from "./InProgress";
import Home from "./Home";
import history from './history';

export default class Routes extends React.Component {
    
    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/about-me" component={AboutMe} />
                    <Route path="/projects" component={Projects}/>
                    <Route path="/in-progress" component={InProgress}/>
                    <Route path="/contact" component={Contact} />                
                </Switch>
            </Router>
        )
    }
}
