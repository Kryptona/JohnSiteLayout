import React from 'react';
import styles from "./date_info.scss";

interface Props {
    readonly year: string;
    readonly type: string;
}

const DateInfo: React.FC<Props> = ({year, type}) => {
    return (
        <div className={styles.year_info_container}>
            <div className={styles.year}>{year}</div>
            <div className={styles.type}>{type}</div>
        </div>

    );
};

export default DateInfo;