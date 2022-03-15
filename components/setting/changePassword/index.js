import React from "react";
import Input from "../../ui/profileInput";

import styles from "./styles.module.scss";

const ChangePassword = () => {
  return (
    <div className={styles.content}>
      <h3>Change Password</h3>
      <form>
        <div className={styles.formGroup}>
          <Input
            labelText='Old Password'
            placeholder='Old Password'
            // value='Peter Ihimire'
          />
        </div>
        <div className={styles.formGroup}>
          <Input
            labelText='New Password'
            placeholder='New Password'
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

export default ChangePassword;
