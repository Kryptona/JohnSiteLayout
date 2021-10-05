import React from 'react';
import Panel from "../shared/headerPanel/Panel";
import BlogContainer from "./blog_container/BlogContainer";
import Footer from "../shared/footer/Footer";
import styles from "./blog.scss";

const Blog = () => {
    return (
        <div className={styles.root}>
            <Panel/>
            <BlogContainer/>
            <Footer/>
        </div>
    );
};

export default Blog;