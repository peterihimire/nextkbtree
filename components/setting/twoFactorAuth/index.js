import React from "react";
import styles from './styles.module.scss'

const TwoFactorAuth = () => {
  return (
    <div className={styles.content}>
      <h3>2FA Settings</h3>

      <form>
        <div className={styles.formGroup}>
          <Input
            labelText='Set Security Question'
            placeholder='Set Security Question'
            // value='Peter Ihimire'
          />
        </div>
        <div className={styles.formGroup}>
          <Input
            labelText='Enter Answer'
            placeholder='Enter Answer'
            // value='Peter Ihimire'
          />
        </div>
        <div className={styles.formGroup}>
          <Input
            labelText='Comfirm Password'
            placeholder='Comfirm Password'
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

export default TwoFactorAuth;
