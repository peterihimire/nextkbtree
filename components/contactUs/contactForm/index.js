import React from "react";
import styles from "./styles.module.scss";
import Input from "../../ui/customInput";
import Select from "../../ui/customSelect";
import Textarea from "../../ui/customTextarea";

const ContactForm = () => {
  return (
    <section className={styles.contact}>
      <div className={`${styles.wrapper} wrapper `}>
        <div className={styles.left}>
          <h4>Get in touch with US</h4>
          <p>
            Submit this form and a sales representative will get back to you
            within 24 hours.
          </p>
          <div className={styles.iconText}>
            <img src="/images/phone-yellow.svg" alt="" />
            <span>Call sales +234 800 000 0000</span>
          </div>
          <div className={`${styles.iconText}  ${styles.iconBottom}`}>
            <img src="/images/position-yellow.svg" alt="" />
            <span>32 Heywhy address, 39th Floor Washington, DC 20036</span>
          </div>

          <div className={styles.socials}>
            <a href="/">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="/">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="/">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="/">
              <i className="fab fa-twitter"></i>
            </a>
          </div>
        </div>
        <div className={styles.right}>
          <form>
            <div className={styles.formGrid}>
              <div className={styles.formGroup}>
                <Input
                  // labelText="First Name"
                  name="firstName"
                  id="firstName"
                  placeholder="First Name"
                  required
                  type="text"
                />
              </div>

              <div className={styles.formGroup}>
                <Input
                  // labelText="Last Name"
                  name="lastName"
                  id="lastName"
                  placeholder="Last Name"
                  required
                  type="text"
                />
              </div>

              <div className={styles.formGroup}>
                <Input
                  // labelText="Email"
                  name="email"
                  id="email"
                  placeholder="Email"
                  required
                  type="email"
                />
              </div>

              <div className={styles.formGroup}>
                <Input
                  // labelText="Phone Number"
                  name="phoneNumber"
                  id="phoneNumber"
                  placeholder="Phone Number"
                  required
                  type="text"
                />
              </div>
            </div>
            <div className={styles.formSelect}>
              <Select
                // labelText="Country"
                id="country"
                name="country"
                required
                wrapClass={styles.selectWrap}
              >
                <option>Country</option>
                <option>Nigeria</option>
                <option>Ghana</option>
                <option>United Kingdom</option>
                <option>Australia</option>
              </Select>
            </div>

            <div className={styles.textarea}>
              <Textarea
                // labelText="Message"
                id="message"
                required
                name="message"
                placeholder="Message"
              />
            </div>
            <div className={styles.submitBtn}>
              <button className="btn-primary btn-block">Send</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
