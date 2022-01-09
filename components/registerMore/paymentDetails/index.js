import React, { useState } from "react";
import styles from "./styles.module.scss";
import Input from "../../ui/customInput";
import Select from "../../ui/customSelect";

const PaymentDetails = ({ stepHandler, backHandler }) => {
  const [payMethod, setPayMethod] = useState("");

  const radioHandler = (e) => {
    setPayMethod(e.target.value);
  };

  return (
    <form
      className={styles.form}
      onSubmit={(e) => {
        e.preventDefault();
        console.log("Submitted!");
      }}
    >
      <h4>Select Payment Method</h4>

      <div className={styles.formPayType}>
        <div className={styles.formRadioGroup}>
          <input
            type="radio"
            value="card"
            onChange={radioHandler}
            checked={payMethod === "card"}
            id="payCard"
            name="pay_method"
          />

          <label htmlFor="payCard">Payment card</label>
        </div>

        <div className={styles.formRadioGroup}>
          <input
            type="radio"
            value="paypal"
            onChange={radioHandler}
            checked={payMethod === "paypal"}
            id="paypal"
            name="pay_method"
          />

          <label htmlFor="paypal">PayPal</label>
        </div>
      </div>

      <Input
        labelText="Name on Card"
        id="cardName"
        required
        type="text"
        className={styles.payInput}
        name="card_name"
      />

      <Input
        labelText="Card Number"
        id="cardNumber"
        required
        type="text"
        className={styles.cardInput}
        wrapperClass={styles.payInput}
        innerLabel
        name="card_number"
      >
        <img alt="card" src="/images/credit-card 1.svg" />
      </Input>

      <div className={`${styles.formGrid} ${styles.mb20}`}>
        <div className={styles.formGroup}>
          <Input labelText="CVV" id="cardCvv" required type="text" name="cvv" />
        </div>
        <div className={styles.formGroup}>
          <Input
            labelText="Expiry Date"
            id="expiry"
            required
            type="text"
            name="expiry"
            placeholder="MM/YY"
          />
        </div>
        <div className={styles.formGroup}>
          <Select
            name="country"
            labelText="Country of Residence"
            required
            id="country"
            defaultValue=""
          >
            <option value="" disabled>
              Select one
            </option>
            <option value="nig">Nigeria</option>
            <option value="gh">Ghana</option>
            <option value="sa">South Africa</option>
          </Select>
        </div>
        <div className={styles.formGroup}>
          <Select
            name="state"
            labelText="State"
            required
            id="state"
            defaultValue=""
          >
            <option value="" disabled>
              Select one
            </option>
            <option value="nig">Cross River</option>
            <option value="gh">Benue</option>
            <option value="sa">Lagos</option>
          </Select>
        </div>
      </div>

      <Input
        labelText="Address"
        id="address"
        required
        type="text"
        name="address"
        className={styles.payInput}
      />

      <div className={`${styles.formGrid} ${styles.mb48}`}>
        <div className={styles.formGroup}>
          <Input labelText="City" id="city" required type="text" name="city" />
        </div>
        <div className={styles.formGroup}>
          <Input
            labelText="Postal Code"
            id="postal"
            required
            type="text"
            name="postal"
          />
        </div>
      </div>

      <div className={styles.formBtn}>
        <button
          className="btn-primary btn-small"
          onClick={stepHandler}
          type="submit"
        >
          REVIEW ORDER
        </button>
      </div>

      {/* added by me */}
      <div className={styles.formBtn}>
        <button
          className="btn-primary btn-small"
          onClick={backHandler}
          type="submit"
        >
          BACK
        </button>
      </div>
    </form>
  );
};

export default PaymentDetails;
