import React from 'react';
import styles from "./introduce.scss";
import Avatar from "../avatar/avatar";


const Introduce = () => {
    return (
        <div className={styles.root}>
            <div className={styles.container}>
                <div className={styles.text}>
                    <div className={styles.intro}>
                        Hi, I am John,
                        Creative Technologist
                    </div>
                    <div className={styles.desc}>
                        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                    </div>
                </div>
                <button className={styles.download}>
                    Download Resume
                </button>
            </div>

            <div className={styles.photo}>
                <Avatar/>
            </div>
        </div>
    );
};

export default Introduce;