import React from "react";
import profilImage from "../../Images/Kame22.jpg";
import styles from "./AboutPage.module.css";

function AboutPage() {
  const presentation = (
    <div>
      <h1>SimpleLifeBalancing</h1>
      <p>A life management blog.</p>
      <br />

      <h2>Goal</h2>
      <p>
        Leverage you into a position where you have more control over your life.
      </p>

      <h2>Mission</h2>
      <p>
        Inspire and educate new motivated people regardless of their background.
      </p>

      <h2>Vision</h2>
      <p>Live in a world where people have control over their lives.</p>

      <h2>Values</h2>
      <p>Growth - Efficiency - Control - Transparency</p>
      <br />
      <p>
        <em>
          “Everything that I offer the world comes as a product of me trying to
          help myself.” - Elliot Hulse
        </em>
      </p>
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
        <div className={styles.presentation}>{presentation}</div>
      </div>
    </div>
  );
}

export default AboutPage;
