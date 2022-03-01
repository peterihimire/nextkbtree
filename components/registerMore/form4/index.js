import React, { useState } from "react";
import styles from "./styles.module.scss";
import Modal from "../../ui/modal";
import Select from "../../ui/customSelect";
import Input from "../../ui/customInput";



const Form = ({ stepHandler, backHandler }) => {
  const [employedModal, setEmployedModal] = useState(false);
  const [otherModal, setOtherModal] = useState(false);

  const employedHandler = () => {
    setEmployedModal(true);

    document.documentElement.classList.add("_fixed");
    document.body.classList.add("_fixed");
  };

  const otherHandler = () => {
    setOtherModal(true);

    document.documentElement.classList.add("_fixed");
    document.body.classList.add("_fixed");
  };

  return (
    <>
      <div className={styles.radioForm}>
        <div className={styles.backSkipBtn}>
          <button onClick={backHandler} className={styles.backStep}>
            <img src="/images/arrow-back.svg" alt="" />
          </button>

          <button onClick={stepHandler} className={styles.backStep}>
            Skip
          </button>
        </div>

        <h2>Select your Employment Status</h2>

        <form>
          <div className={styles.radioToolbar}>
            <input
              type="radio"
              id="radioEmployed"
              name="employmentStatus"
              value="employed"
            />
            <label htmlFor="radioEmployed" onClick={employedHandler}>
              <div> Employed</div>
              <span>
                <img src="images/check-circle.svg" />
              </span>
            </label>

            <input
              type="radio"
              id="radioUnemployed"
              name="employmentStatus"
              value="unemployed"
            />
            <label htmlFor="radioUnemployed" onClick={otherHandler}>
              <div> Unemployed</div>
              <span>
                <img src="images/check-circle.svg" />
              </span>
            </label>

            <input
              type="radio"
              id="radioSelfemployed"
              name="employmentStatus"
              value="selfemployed"
            />
            <label htmlFor="radioSelfemployed" onClick={otherHandler}>
              <div>Self Employed</div>
              <span>
                <img src="images/check-circle.svg" />
              </span>
            </label>

            <input
              type="radio"
              id="radioRetired"
              name="employmentStatus"
              value="retired"
            />
            <label htmlFor="radioRetired" onClick={otherHandler}>
              <div> Retired</div>
              <span>
                <img src="images/check-circle.svg" />
              </span>
            </label>

            <input
              type="radio"
              id="radioStudent"
              name="employmentStatus"
              value="student"
            />
            <label htmlFor="radioStudent" onClick={otherHandler}>
              <div> Student</div>
              <span>
                <img src="images/check-circle.svg" />
              </span>
            </label>
          </div>

          <div className={styles.submitBtn}>
            <button
              className="btn-primary btn-block"
              onClick={stepHandler}
              type="submit"
            >
              Continue
            </button>
          </div>
        </form>
      </div>
      {employedModal && (
        <Modal
          // header="This is the modal header"
          bodyClass={styles.modalContent}
          click={() => {
            setEmployedModal(false);

            document.documentElement.classList.remove("_fixed");
            document.body.classList.remove("_fixed");
          }}
        >
          <div className={styles.modalForm}>
            <form>
              <div className={styles.formGroup}>
                <Input
                  // labelText="What’s your Email?"
                  type="text"
                  name="phoneNumber"
                  id="phoneNumber"
                  required
                  placeholder="Name of Employer"
                />
              </div>
              <div className={styles.formGroup}>
                <Select
                  name="country"
                  // labelText="Country of Residence"
                  required
                  id="country"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Company Sector
                  </option>
                  <option value="nig">Nigeria</option>
                  <option value="gh">Ghana</option>
                  <option value="sa">South Africa</option>
                </Select>
              </div>
              <div className={styles.formGroup}>
                <Input
                  // labelText="What’s your Email?"
                  type="text"
                  name="phoneNumber"
                  id="phoneNumber"
                  required
                  placeholder="Enter Job Title"
                />
              </div>
              <div className={styles.formGroup}>
                <Select
                  name="country"
                  // labelText="Country of Residence"
                  required
                  id="country"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Select Annual Income
                  </option>
                  <option value="nig">Nigeria</option>
                  <option value="gh">Ghana</option>
                  <option value="sa">South Africa</option>
                </Select>
              </div>
              <div className={styles.formGroup}>
                <Select
                  name="country"
                  // labelText="Country of Residence"
                  required
                  id="country"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Select Total Net Worth
                  </option>
                  <option value="nig">Nigeria</option>
                  <option value="gh">Ghana</option>
                  <option value="sa">South Africa</option>
                </Select>
              </div>

              <div className={styles.submitBtn}>
                <button
                  className="btn-primary btn-block"
                  onClick={stepHandler}
                  type="submit"
                >
                  Continue
                </button>
              </div>
            </form>
          </div>
        </Modal>
      )}

      {otherModal && (
        <Modal
          // header="This is the modal header"
          bodyClass={styles.modalContent}
          click={() => {
            setOtherModal(false);

            document.documentElement.classList.remove("_fixed");
            document.body.classList.remove("_fixed");
          }}
        >
          <div className={styles.modalForm}>
            <form>
              <div className={styles.formGroup}>
                <Input
                  // labelText="What’s your Email?"
                  type="text"
                  name="phoneNumber"
                  id="phoneNumber"
                  required
                  placeholder="Enter Funding Source"
                />
              </div>
              <div className={styles.formGroup}>
                <Select
                  name="country"
                  // labelText="Country of Residence"
                  required
                  id="country"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Select Annual Income
                  </option>
                  <option value="nig">Nigeria</option>
                  <option value="gh">Ghana</option>
                  <option value="sa">South Africa</option>
                </Select>
              </div>

              <div className={styles.formGroup}>
                <Select
                  name="country"
                  // labelText="Country of Residence"
                  required
                  id="country"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Select Total Net Worth
                  </option>
                  <option value="nig">Nigeria</option>
                  <option value="gh">Ghana</option>
                  <option value="sa">South Africa</option>
                </Select>
              </div>

              <div className={styles.submitBtn}>
                <button
                  className="btn-primary btn-block"
                  onClick={stepHandler}
                  type="submit"
                >
                  Continue
                </button>
              </div>
            </form>
          </div>
        </Modal>
      )}
    </>
  );
};

export default Form;
