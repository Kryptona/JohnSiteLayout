import React from 'react';
import Panel from "../shared/headerPanel/Panel";
import WorksContainer from "./worksContainer/WorksContainer";
import styles from "./works_root.scss";
import Footer from "../shared/footer/Footer";

const Works = () => {
    return (
        <div className={styles.root}>
            <Panel/>
            <WorksContainer/>
            <Footer/>
        </div>
    );
};

export default Works;