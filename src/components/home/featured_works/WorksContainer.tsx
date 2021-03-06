import React from 'react';
import styles from "./works.scss";
import WorkCard from "../../shared/work_card/WorkCard";
import designing_dashboard from "../../../img/designing_dashboard.png";
import vibrant from "../../../img/vibrant_portraits_of_2020.png";
import days from "../../../img/36_days_of_malayalam_type.png";

const WorksContainer = () => {
    return (
            <div className={styles.container}>
                <WorkCard
                    imgSrc={designing_dashboard}
                    header={"Designing Dashboards"}
                    year={"2020"}
                    type={"Dashboard"}
                    desc={"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."}
                />
                <WorkCard
                    imgSrc={vibrant}
                    header={"Vibrant Portraits of 2020"}
                    year={"2018"}
                    type={"Illustration"}
                    desc={"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."}
                />
                <WorkCard
                    imgSrc={days}
                    header={"36 Days of Malayalam type"}
                    year={"2018"}
                    type={"Typography"}
                    desc={"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."}
                />
            </div>
    );
};

export default WorksContainer;