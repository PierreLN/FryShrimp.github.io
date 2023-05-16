import { useState, Fragment } from "react";
import styles from "./BlogItem.module.css";
import Card from "../../UI/Card";
import Modal from "../../UI/Modal";

function BlogItem(props: any) {
  const [blogSelected, setBlogSelected] = useState(false);

  const blogSelectHandler = (event: any) => {
    setBlogSelected(true);
  };

  const modalOff = (event: any) => {
    setBlogSelected(false);
  };

  return (
    <Fragment>
      {blogSelected && (
        <Modal
          key={props.id}
          id={props.id}
          title={props.title}
          message={props.description}
          image={props.image}
          onConfirm={modalOff}
        ></Modal>
      )}
      <div className={styles.blog_section} onClick={blogSelectHandler}>
        <h3 className={styles.blog_name}>{props.title}</h3>
        <img
          src={props.image}
          alt={props.title}
          className={styles.blog_image}
        />
        <Card className={styles.blog_description}>
          {props.sumary}
          {/* <Card className={styles.blog_language}>{props.language}</Card> */}
        </Card>
      </div>
    </Fragment>
  );
};

export default BlogItem;