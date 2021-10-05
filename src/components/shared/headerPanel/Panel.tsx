import React from 'react';
import styles from "./panel.scss"
import {Link} from "react-router-dom";

const Panel = () => {
    return (
        <div className={styles.root}>
            <div className={styles.container}>
                <Link to="/works">Works</Link>
                <Link to="/blog">Blog</Link>
                <Link to="/contact">Contact</Link>
            </div>
        </div>
    );
};

export default Panel;