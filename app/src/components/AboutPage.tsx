import React from "react";
import profilImage from "../Images/Kame.jpg";
import styles from "./AboutPage.module.css";

function AboutPage() {
  const title = <h2>About me</h2>;
  const presentation = (
    <div>
      <div>Hello! </div>
      <br></br>
      <div>
        <div>intro </div>
        <br></br>
        <div>content</div>
        <br></br>
        <div>more stuff</div>
      </div>
      <br></br>
      <div>Thank you for visiting,</div>
    </div>
  );

  return (
    <div className={styles.about_page}>
      <div className={styles.image}>
        <img
          className={styles.profil_image}
          src={profilImage}
          alt="Profil"
        ></img>
      </div>
      <div className={styles.description}>
        <div className={styles.title}>{title}</div>
        <div className={styles.presentation}>{presentation}</div>
      </div>
    </div>
  );
}

export default AboutPage;
