import React from 'react';
import {useParams} from "react-router-dom";
import styles from "./work_details.scss"
import Panel from "../../shared/headerPanel/Panel";
import DateInfo from "../../shared/date_info/DateInfo";
import Footer from "../../shared/footer/Footer";

import team from "../../../img/team_diversity.png";
import car from "../../../img/car.png";
import timetable from "../../../img/timetable.png";

const WorkDetails = () => {
    let {id} = useParams<{ readonly id: string }>();
    return (
        <div className={styles.root}>
            <Panel/>
            <div className={styles.container}>
                <h1 className={styles.header}>
                    Designing Dashboards with usability in mind
                </h1>
                <div>
                    <DateInfo
                        year={"2020"}
                        type={"Dashboard, User Experience Design"}
                    />
                </div>
                <div className={styles.desc}>
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                </div>
                <div className={styles.image}>
                    <img src={team}/>
                </div>
                <h2 className={styles.heading1}>
                    Heading 1
                </h2>
                <h3 className={styles.heading2}>
                    Heading 2
                </h3>
                <div className={styles.desc}>
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                </div>
                <div className={styles.image}>
                    <img src={car}/>
                </div>
                <div className={styles.image}>
                    <img src={timetable}/>
                </div>
            </div>

            <Footer/>
        </div>);
};

export default WorkDetails;