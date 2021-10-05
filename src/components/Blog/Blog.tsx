import React, {Component} from "react";

// import {map} from 'underscore'
import {Link} from "react-router-dom"

import styles from "../../styles/default.scss";
import Panel from "./headerPanel/Panel";
import Introduce from "./introduce/Introduce";
import Posts from "./recent_posts/Posts";
import WorksContainer from "./featured_works/WorksContainer";
import Footer from "./footer/Footer";

export default class Blog extends Component {
    render() {
        return (
            <div className={styles.containerHeader}>
                <Panel/>
                <Introduce/>
                <Posts/>
                <WorksContainer/>
                <Footer/>
            </div>
        );
    }
}


