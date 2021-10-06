import React from 'react';
import styles from "./work_card.scss";
import {Link} from "react-router-dom";

interface Props {
    readonly id: string;
    readonly imgSrc: string;
    readonly header: string;
    readonly year: string;
    readonly type: string;
    readonly desc: string;
}

const WorkCard: React.FC<Props> = ({id, imgSrc, header, year, type, desc}) => {
    return (
        <div className={styles.root}>
            <div className={styles.image}>
                <img src={imgSrc}/>
            </div>
            <div className={styles.container}>
                <Link to={`/works/${id}`}>{header}</Link>
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