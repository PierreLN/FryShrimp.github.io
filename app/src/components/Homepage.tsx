import styles from "./Homepage.module.css";

const Homepage = (props: any) => {
  return (
    <div className={styles.homepage}>
      <div className={styles["homepage-top"]}></div>
      <div className={styles["homepage-bottom"]}>
        <div>
        Welcome to SimpleLifeBalancing!

        </div>
        <div className={styles.description}>
            <br />
          Balancing your life is one of the most important aspect of your life
          and it’s critical to your dream’s success. Nevertheless, many of us
          neglect it. Fear not, it’s never too late to start taking control over
          your life. This blog will help you leverage yourself into a position
          where you have more control over your life. “Invest in you.” Feel free
          to navigate through the blog and look for the answers you need.
          “Absorb what is useful. Reject what is useless. Add what is
          essentially your own.” – Bruce lee.
          
          <br />  “Everything that I offer the world
          comes as a product of me trying to help myself.” -Elliot Hulse
        </div>
      </div>
    </div>
  );
};

export default Homepage;
