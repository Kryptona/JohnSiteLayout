import React from 'react';
import styles from "./avatar.scss";
import avatar from "../../../img/avatar.png";
import avatar_bg from "../../../img/avatar_bg.png";

const Avatar = () => {
    return (
        <div className={styles.root} style={{backgroundImage: `url(/avatar_bg.png)`}}>
            <img className={styles.avatar} src={avatar}/>
        </div>
    );
};

export default Avatar;