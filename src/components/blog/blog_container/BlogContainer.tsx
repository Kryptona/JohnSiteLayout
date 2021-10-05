import React from 'react';
import styles from "./blog_container.scss";
import BlogCard from "../blog_card/BlogCard";

const BlogContainer = () => {
    return (
        <div className={styles.root}>
            <div className={styles.header}>Blog</div>
            <BlogCard
                header={"UI Interactions of the week"}
                date={"12 Feb 2019"}
                info={"Express, Handlebars"}
                desc={"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. " +
                "Velit officia consequat duis enim velit mollit." +
                " Exercitation veniam consequat sunt nostrud amet."}
            />
            <BlogCard
                header={"UI Interactions of the week"}
                date={"12 Feb 2019"}
                info={"Express, Handlebars"}
                desc={"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. " +
                "Velit officia consequat duis enim velit mollit." +
                " Exercitation veniam consequat sunt nostrud amet."}
            />
            <BlogCard
                header={"UI Interactions of the week"}
                date={"12 Feb 2019"}
                info={"Express, Handlebars"}
                desc={"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. " +
                "Velit officia consequat duis enim velit mollit." +
                " Exercitation veniam consequat sunt nostrud amet."}
            />
            <BlogCard
                header={"UI Interactions of the week"}
                date={"12 Feb 2019"}
                info={"Express, Handlebars"}
                desc={"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. " +
                "Velit officia consequat duis enim velit mollit." +
                " Exercitation veniam consequat sunt nostrud amet."}
            />
        </div>
    );
};

export default BlogContainer;