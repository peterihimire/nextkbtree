import React from "react";
import styles from "./styles.module.scss";

const Profile = () => {
  return (
    <div className={styles.content}>
      <h3>Profile settings</h3>

      <form>
        <div className={styles.formGroup}>
          <Input
            labelText='Full Name'
            placeholder='Full Name'
            // value='Peter Ihimire'
          />
        </div>
        <div className={styles.formGroup}>
          <Input
            labelText='Email'
            placeholder='Email'
            // value='Peter Ihimire'
          />
        </div>
        <div className={styles.formGroup}>
          <Input
            labelText='Phone Number'
            placeholder='Phone Number'
            // value='Peter Ihimire'
          />
        </div>
        <div className={styles.formGroup}>
          <Input
            labelText='Confirm New Password'
            placeholder='Confirm New Password'
            // value='Peter Ihimire'
          />
        </div>

        <div className={styles.submitBtn}>
          <button
            className='btn-primary btn-block'
            // onClick={stepHandler}
            type='submit'
          >
            Update
          </button>
        </div>
      </form>
    </div>
  );
};

export default Profile;
