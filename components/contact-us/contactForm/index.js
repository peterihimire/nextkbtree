import React from "react";
import styles from "./styles.module.scss";
import Input from "../../ui/customInput";
import Select from "../../ui/customSelect";
// import Textarea from "../../ui/customTextarea";

const ContactForm = () => {
  return (
    <section className={styles.contact}>
      <div className={`${styles.wrapper} wrapper `}>
        <div className={styles.left}>
          <h4>Get in touch with US</h4>
          <p>
            Submit this form and a sales representative will get back to you
            within 24 hours.{" "}
          </p>
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
            <div className={styles.formGroup}>
              <Select
                // labelText="Country"
                id="country"
                name="country"
                required
                wrapClass={styles.selectWrap}
              >
                <option>Country</option>
                <option>Nigeria</option>
              </Select>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
