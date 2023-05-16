import styles from "./HomePage.module.css";
import Card from "../UI/Card";

const HomePage = (props: any) => {
  return (
    <div className={styles.homepage}>
      <div className={styles["homepage-top"]}>

        <div className={styles.title}>Welcome to SimpleLifeBalancing!</div>
      </div>
      <div className={styles["homepage-bottom"]}>
        <Card className={styles.description}>
          <br/>
          Balancing your life is one of the most important aspect of your life
          and it's critical to your dream's success. Nevertheless, many of us
          neglect it. Fear not, it's never too late to start taking control over
          your life. This blog will help you leverage yourself into a position
          where you have more control over your life. 
          <br/><br/>
          Feel free to navigate through the blog and look for the answers you need.
          <br/><br/>
          <em className={styles.bestQuote}>“Invest in you.” </em>
          <br/><br/>
          <em>“Absorb what is useful. Reject what is useless. Add what is
          essentially your own.” </em>-Bruce lee.
          <br/><br/> <em>“Everything that I offer the world comes as a product of me
          trying to help myself.” </em>-Elliot Hulse
        </Card>
      </div>
    </div>
  );
};

export default HomePage;
