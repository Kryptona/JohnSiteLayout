import React from 'react';
import styles from '/src/styles/default.scss'
import Posts from "./components/recent_posts/Posts";
import Panel from "./components/headerPanel/Panel";
import Introduce from "./components/introduce/Introduce";
import Works from "./components/featured_works/Works";
import Footer from "./components/footer/Footer";

const App = () => {
    return (
        <div className={styles.containerHeader}>
            <Panel/>
            <Introduce/>
            <Posts/>
            <Works/>
            <Footer/>
            <div className={styles.container}>

            </div>

        </div>
    );
};

export default App;