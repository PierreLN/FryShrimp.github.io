import styles from './MainPage.module.css'
import React, { useState, useEffect, useRef } from "react";
import AboutPage from "./AboutPage";
import HomePage from "./Homepage";
import BlogPage from "./BlogPage";
import ContactPage from "./ContactPage";

function MainPage(props: any) {
                   
  const mainPageRef = useRef(null);

  const homePage = <HomePage onClick={props.onClick}></HomePage>;
  const aboutPage = <AboutPage></AboutPage>;
  const blogPage = <BlogPage></BlogPage>;
  const contactPage = <ContactPage></ContactPage>;

  const [currentPage, setCurrentPage] = useState(homePage);
  const [background, setBackground] = useState('backgroundPicture0')

  useEffect(() => {
    if (props.selectedPage === "about") {
      setCurrentPage(aboutPage);
    } else if (props.selectedPage === "home") {
      setCurrentPage(homePage);
    } else if (props.selectedPage === "blog") {
      setCurrentPage(blogPage);
    } else if (props.selectedPage === "contact") {
      setCurrentPage(contactPage);
    }
  }, [props.selectedPage]);

  // For picture rotation - not activated
  useEffect(() => {
    let currentIndex = 0;
    const intervalId = setInterval(() => {
      currentIndex = (currentIndex + 1) % 2;
      setBackground(`backgroundPicture${currentIndex}`);
    }, 50000);
  
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className={`${styles.main_page} ${styles[background]} ${styles.backgroundAnimation}` } ref={mainPageRef}>
      {currentPage}
    </div>
  );
}

export default MainPage;