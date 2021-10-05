import React, {Component} from 'react';
import './styles/global.scss';

import {
    BrowserRouter as Router,
    Route,
    Switch,
    Link, Redirect
} from "react-router-dom";

import Blog from "./components/Blog/Blog";
import Works from "./components/Works/Works";


export default function App() {

    return (
        <Switch>
            <Route path="/blog"> <Blog/> </Route>
            <Route path="/works"> <Works/> </Route>
            <Redirect to={'/blog'}/>
        </Switch>
    );
}

