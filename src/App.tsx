import React from 'react';
import styles from '/src/styles/default.scss'
import Header from "./components/header/Header";
import Panel from "./components/headerPanel/Panel";
import Introduce from "./components/introduce/Introduce";

const App = () => {
    return (
        <div className={styles.containerHeader}>
            <Panel/>
            <Introduce/>
            <div className={styles.container}>

            </div>

        </div>
    );
};

export default App;