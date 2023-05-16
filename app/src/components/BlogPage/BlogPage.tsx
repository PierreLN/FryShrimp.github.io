import React, { Fragment } from "react";
import styles from "./BlogPage.module.css";
import Blogs from "./Blogs/Blogs";

function BlogPage(props: any) {
  return (
    <Fragment>
      <div className={styles.blog_page}>
        <Blogs></Blogs>
      </div>
    </Fragment>
  );
}

export default BlogPage;
