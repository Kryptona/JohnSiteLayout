import React from 'react';
import {useParams} from "react-router-dom";
import styles from "./work_details.scss"
import Panel from "../../shared/headerPanel/Panel";
import DateInfo from "../../shared/date_info/DateInfo";

const WorkDetails = () => {
    let {id} = useParams<{ readonly id: string }>();
    return (
        <div className={styles.root}>
            <Panel/>
            <div className={styles.header}>
                Designing Dashboards with <br/> usability in mind
            </div>
            <div>
                <DateInfo
                    year={"2020"}
                    type={"Dashboard, User Experience Design"}
                />
            </div>
        </div>);
};

export default WorkDetails;