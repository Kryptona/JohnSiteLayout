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


export default function App() {

    return (
        <Switch>
            <Route path="/blog"> <Blog/> </Route>
            <Route exact path="/"> <Home/> </Route>
            <Route path="/works"> <Works/> </Route>
            <Redirect to={'/'}/>
        </Switch>
    );
}

