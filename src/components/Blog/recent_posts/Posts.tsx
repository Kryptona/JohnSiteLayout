import React from 'react';
import PostCard from "../post_card/PostCard";
import styles from "./posts.scss";

const Posts = () => {
    return (
        <div className={styles.root}>
            <div className={styles.container}>
                <div className={styles.header}>Recent posts</div>
                <div className={styles.card_container}>
                    <PostCard
                        header={"Making a design system from scratch"}
                        date={"12 Feb 2020"}
                        info={"Design, Pattern"}
                        desc={"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."}
                    />
                    <PostCard header={"Creating pixel perfect icons in Figma"}
                              date={"12 Feb 2020"}
                              info={"Figma, Icon Design"}
                              desc={"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."}/>
                </div>

            </div>

        </div>
    );
};

export default Posts;