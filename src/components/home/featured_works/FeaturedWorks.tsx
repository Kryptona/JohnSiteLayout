import styles from "./works.scss";
import WorksContainer from "./WorksContainer";

import React from 'react';

const FeaturedWorks = () => {
    return (
        <div className={styles.root}>
            <div className={styles.header}>Featured works</div>
            <WorksContainer/>
        </div>
    );
};

export default FeaturedWorks;