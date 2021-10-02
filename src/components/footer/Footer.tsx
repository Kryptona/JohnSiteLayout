import React from 'react';
import styles from "./footer.scss";

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faFacebookSquare, faTwitter, faInstagram, faLinkedin} from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
    return (
        <div className={styles.root}>
            <div className={styles.container}>
                <div className={styles.logoLinks}>
                    <FontAwesomeIcon icon={faFacebookSquare} style={{color: "#21243D"}}/>
                    <FontAwesomeIcon icon={faInstagram} style={{color: "#21243D"}}/>
                    <FontAwesomeIcon icon={faTwitter} style={{color: "#21243D"}}/>
                    <FontAwesomeIcon icon={faLinkedin} style={{color: "#21243D"}}/>
                </div>
                <div className={styles.title}>Copyright ©2020 All rights reserved </div>
            </div>

        </div>
    );
};

export default Footer;