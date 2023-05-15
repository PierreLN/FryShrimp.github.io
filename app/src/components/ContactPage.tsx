import React, { useState, useRef } from "react";
import styles from "./ContactPage.module.css";

function ContactPage() {
  let email = "asdfd@gmail.com";

  const [error, setError] = useState(null);
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);

  const errorHandler = () => {
    setError(null);
  };

  const socialMediaHandler = (data: any) => {
    if (data.target.innerHTML === "LinkedIn") {
      window.location.href = "";
    } else if (data.target.innerHTML === "Github") {
      window.location.href = "*";
    }
  };

  return (
    <div className={styles.contactPage}>
      <div className={styles.image}></div>

      <div className={styles.contact_me}>
        <div className={styles.contact_me_section}>
          <form
            action={`mailto:${email}`}
            method="post"
            encType="text/plain"
            className={styles.form_main_box}
          >
            <div className={styles.form_section}>
              <h1>Contact Me</h1>
              <label className={styles.name} htmlFor="name">
                Full Name
              </label>
              <input
                className={styles.name_input}
                type="text"
                name="name"
                id="name"
                ref={nameRef}
              ></input>
              <label className={styles.email} htmlFor="email">
                Email
              </label>
              <input
                className={styles.email_input}
                ref={emailRef}
                type="email"
                name="email"
                id="email"
              ></input>
              <label className={styles.message} htmlFor="message">
                Message
              </label>
              <textarea
                className={styles.message_input}
                name="message"
                id="message"
                placeholder="Any questions?"
                ref={messageRef}
              ></textarea>
            </div>
            <div>
              <button className={styles.button_section} type="submit">
                Send
              </button>
            </div>
          </form>
          <div className={styles.info_section}>
            <div className={styles.info}>
              <div className={styles.info_email}>
                <h2>Email</h2>
                <div className={styles.info_email_text}>{email}</div>
              </div>

              <div className={styles.info_location}>
                <h2>Based in</h2>
                <div className={styles.info_location_text}>
                  <div>Malaysia</div>
                  <div>Kuala Lumpur</div>
                </div>
              </div>
            </div>
            <div className={styles.media} onClick={socialMediaHandler}>
              <div className={styles.contactPage_media}>LinkedIn</div>
              <div className={styles.contactPage_media}>Github</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
