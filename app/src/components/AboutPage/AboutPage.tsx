import React from "react";
import profilImage from "../../Images/Kame22.jpg";
import styles from "./AboutPage.module.css";

function AboutPage() {
  const title = <h2>About Us</h2>;
  const presentation = (
    <div>
      <div>SimpleLifeBalancing is a life management blog.</div>
      <br></br>
      <div>
        <div>Goal: Leverage you into a position where you have more control over your life. </div>
        <br></br>
        <div>Mission: Inspire and educate new motivated people regardless of their background.</div>
        <br></br>
        <div>Vision: Live in a world where people have control over their lives.</div>
        <br />
        <div>Values: Growth - Efficiency - Control - Transparency</div>
      </div>
      <br></br>
      <div>“Everything that I offer the world comes as a product of me trying to help myself.” -Elliot Hulse</div>
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
