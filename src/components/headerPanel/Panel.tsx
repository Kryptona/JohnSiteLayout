import React from 'react';
import styles from "./panel.scss"

const Panel = () => {
    return (
        <div className={styles.root}>
            <div className={styles.container}>
                <span>Works</span>
                <span>Blog</span>
                <span>Contact</span>
            </div>
        </div>
    );
};

export default Panel;