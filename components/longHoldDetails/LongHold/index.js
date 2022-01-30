import React, { useState } from "react";
import CustomTabs from "../../ui/tabs/longHoldTab";
import Select from "../../ui/customSelect";
import Input from "../../ui/customInput";
import Textarea from "../../ui/customTextarea";

import styles from "./styles.module.scss";
import Modal from "../../ui/modal";

const LongHold = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [isChecked2, setIsChecked2] = useState(false);
  const handleOnChange = () => {
    setIsChecked(!isChecked);
  };

  const handleOnChange2 = () => {
    setIsChecked2(!isChecked2);
  };

  return (
    <section className={styles.allInvestment}>
      <div className={styles.wrapper}>
        <div className={styles.grid}>
          <div className={styles.left}>
            <div className={styles.leftWrapper}>
              <div className={styles.leftContent}>
                <img src='/images/investment-details-slide.png' alt='' />
                <h3>Property Description</h3>
                <p>
                  This 750+ acre beauty is located in the heart of Lake County
                  with outstanding views, tree lined acres, grape vineyard and
                  gorgeous rolling valley hills. This wine country oasis sits in
                  the Clear Lake AVA and has frontage on State Hwy 53. It comes
                  with a sophisticated labyrinth of gravel roads that allows
                  access to the majority of the property and offers a buyer a
                  tremendous potential to build a premier brand winery, tasting
                  room, wedding venue, events and agricultural retail if
                  desired. The property comes with a proven track record of
                  producing some of the best fruit in Lake County since it has
                  began its operation in 2006. With over 190 acres of planted
                  vineyards, this property contains 5 separate and distinct
                  varietals of grapes. There are an additional 166 + acres of
                  plantable land for additional vineyard to be added to the
                  existing one if wanted. Then you have over 400 + surplus acres
                  to improve as you wish with buildings, vineyard support,
                  potential winery, on site residence and even a tasting room
                  etc. There is a 30 acre-foot reservoir on the property working
                  in conjunction with six (6) wells. Overhead and underground
                  electric is developed to portions of the property and to some
                  of the wells. Private guided tours of the property are
                  available. Limitless possibilities!
                </p>

                <h3>Location</h3>
                <p>895 Highway 53, Clearlake, California 95422, USA</p>

                <img src='/images/investment-map.png' alt='' />

                <h4>Optional</h4>
                <p>
                  We can buy real estate property in your company name in the
                  U.S Corporate Registration (State of Delaware) - We can help
                  you register a corporation and purchase the Real Estate
                  property in your corporation name. State of Delaware offers
                  anonymity, privacy and tax haven for business, it's home to
                  70% of fortune 500 companies in the world. America is open to
                  everyone, take advantage today!
                </p>
              </div>
            </div>
          </div>
          <div className={styles.right}>
            <div className={styles.rightWrapper}>
              <div className={styles.rightContent}>
                <div className={styles.rightHeader}>
                  <div className={styles.headerLeft}>
                    <p>Property Value</p>
                    <h3>$150,000,000</h3>
                  </div>
                  <div className={styles.headerRight}>
                    <span>
                      <img src='/images/favorite-black.svg' alt='' />
                    </span>
                    <span>
                      <img src='/images/forward-black.svg' alt='' />
                    </span>
                  </div>
                </div>
                <h3>Aklas Real Estate dual Investment</h3>
                <p>
                  217 West 57th Street, 127/128, Central Park Tower, Midtown ...
                </p>

                <ul className={styles.investmentOverview}>
                  <li>
                    <p>Closing cost:</p>
                    <span>$150,000,000</span>
                  </li>
                  <li>
                    <p>Deeds transfer:</p>
                    <span>$1500</span>
                  </li>
                  <li>
                    <p>Mailing of document:</p>
                    <span>$1,000</span>
                  </li>
                  <li>
                    <p>Temporary fencing:</p>
                    <span>$5,000</span>
                  </li>
                </ul>

                <div className={styles.check}>
                  <label
                    className={`${styles.labelCheck} ${
                      isChecked2 && styles.hide
                    }`}
                  >
                    <input
                      id='check'
                      type='checkbox'
                      checked={isChecked}
                      onChange={handleOnChange}
                    />
                    <span>I want to buy with my company name (optional)</span>
                  </label>
                  {isChecked && (
                    <div className={styles.formWrapper}>
                      <form>
                        <div className={styles.formGroup}>
                          <Input
                            // labelText="First Name"
                            name='firstName'
                            id='firstName'
                            placeholder='First Name'
                            required
                            type='text'
                          />
                        </div>

                        <div className={styles.formGroup}>
                          <Input
                            // labelText="Last Name"
                            name='lastName'
                            id='lastName'
                            placeholder='Last Name'
                            required
                            type='text'
                          />
                        </div>

                        <div className={styles.formGroup}>
                          <Input
                            // labelText="Email"
                            name='email'
                            id='email'
                            placeholder='Email'
                            required
                            type='email'
                          />
                        </div>

                        <div className={styles.formGroup}>
                          <Input
                            // labelText="Phone Number"
                            name='phoneNumber'
                            id='phoneNumber'
                            placeholder='Phone Number'
                            required
                            type='text'
                          />
                        </div>

                        <div className={styles.formSelect}>
                          <Select
                            // labelText="Country"
                            id='country'
                            name='country'
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
                            id='message'
                            required
                            name='message'
                            placeholder='Message'
                          />
                        </div>
                        {/* <div className={styles.submitBtn}>
                          <button className='btn-primary btn-block'>
                            Send
                          </button>
                        </div> */}
                      </form>
                    </div>
                  )}

                  <label
                    className={`${styles.labelCheck} ${
                      isChecked && styles.hide
                    }`}
                  >
                    <input
                      id='check'
                      type='checkbox'
                      checked={isChecked2}
                      onChange={handleOnChange2}
                    />
                    <span>
                      I want to register a new company name (optional)
                    </span>
                  </label>
                  {isChecked2 && (
                    <div className={styles.formWrapper}>
                      <form>
                        <div className={styles.formGroup}>
                          <Input
                            // labelText="First Name"
                            name='firstName'
                            id='firstName'
                            placeholder='First Name'
                            required
                            type='text'
                          />
                        </div>

                        <div className={styles.formGroup}>
                          <Input
                            // labelText="Last Name"
                            name='lastName'
                            id='lastName'
                            placeholder='Last Name'
                            required
                            type='text'
                          />
                        </div>

                        <div className={styles.formGroup}>
                          <Input
                            // labelText="Email"
                            name='email'
                            id='email'
                            placeholder='Email'
                            required
                            type='email'
                          />
                        </div>

                        <div className={styles.formGroup}>
                          <Input
                            // labelText="Phone Number"
                            name='phoneNumber'
                            id='phoneNumber'
                            placeholder='Phone Number'
                            required
                            type='text'
                          />
                        </div>

                        <div className={styles.formSelect}>
                          <Select
                            // labelText="Country"
                            id='country'
                            name='country'
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
                            id='message'
                            required
                            name='message'
                            placeholder='Message'
                          />
                        </div>
                        {/* <div className={styles.submitBtn}>
                          <button className='btn-primary btn-block'>
                            Send
                          </button>
                        </div> */}
                      </form>
                    </div>
                  )}
                </div>

                <button className={`btn-medium btn-block ${styles.btnGreen}`}>
                  Buy this property
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LongHold;
