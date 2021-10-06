import React, {Component} from 'react';
import './styles/global.scss';

import {
    BrowserRouter as Router,
    Route,
    Switch,
    Link, Redirect
} from "react-router-dom";

import Home from "./components/home/Home";
import Works from "./components/works/Works";
import Blog from "./components/blog/Blog";
import WorkDetails from "./components/works/worksDetails/WorkDetails";


export default function App() {

    return (
        <Switch>
            <Route exact path="/"> <Home/> </Route>
            <Route path="/blog"> <Blog/> </Route>
            <Route exact path="/works"> <Works/> </Route>
            <Route path="/works/:id"> <WorkDetails/> </Route>
            <Redirect to={'/'}/>
        </Switch>
    );
}

