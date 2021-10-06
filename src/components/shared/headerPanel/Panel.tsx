import React from 'react';
import styles from "./panel.scss"
import {NavLink} from "react-router-dom";

const Panel = () => {
    return (
        <div className={styles.root}>
            <div className={styles.container}>
                <NavLink activeClassName={styles.current_navlink} to="/works">Works</NavLink>
                <NavLink activeClassName={styles.current_navlink} to="/blog">Blog</NavLink>
                <NavLink activeClassName={styles.current_navlink} to="/contact">Contact</NavLink>
            </div>
        </div>
    );
};

export default Panel;