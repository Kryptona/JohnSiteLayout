import React from 'react';
import styles from "./work_card.scss";

interface Props {
    readonly img: React.ReactNode;
    readonly header: string;
    readonly year: string;
    readonly type: string;
    readonly desc: string;
}

const WorkCard: React.FC<Props> = ({img, header, year, type, desc}) => {
    return (
        <div className={styles.root}>
            <div className={styles.image}>{img}</div>
            <div className={styles.container}>
                <div className={styles.header}>{header}</div>
                <div className={styles.year_type_container}>
                    <div className={styles.year}>{year}</div>
                    <div className={styles.type}>{type}</div>
                </div>

                <div className={styles.desc}>{desc}</div>
            </div>
        </div>
    );
};

export default WorkCard;