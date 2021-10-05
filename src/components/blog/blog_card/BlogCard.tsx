import React from 'react';
import styles from "./blog_card.scss";

interface Props {
    readonly header: string;
    readonly date: string;
    readonly info: string;
    readonly desc: string;
}

const BlogCard: React.FC<Props> = ({header, date, info, desc}) => {
    return (
        <div className={styles.root}>
            <div className={styles.header}>{header}</div>
            <div className={styles.date_info}>
                <div className={styles.date}> {date}</div>
                <span>|</span>
                <div className={styles.info}>{info}</div>
            </div>
            <div className={styles.desc}>{desc}</div>
        </div>
    );
};

export default BlogCard;