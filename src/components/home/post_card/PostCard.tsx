import React from 'react';
import styles from "./post_card.scss";

interface Props {
    readonly header: string;
    readonly date: string;
    readonly info: string;
    readonly desc: string;
}

// eslint-disable-next-line react/prop-types
const PostCard: React.FC<Props> = ({header, date, info, desc}) => {
    return (
        <div className={styles.root}>
            <div className={styles.text_container}>
                <div className={styles.header}>{header}</div>
                <div className={styles.info}>{date}<span>|</span>{info}</div>
                <div className={styles.desc}>{desc}</div>
            </div>

        </div>
    );
};

export default PostCard;