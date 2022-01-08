import React, { useState } from "react";
import styles from "./styles.module.scss";
import Input from "../../ui/customInput";
// import Header from "components/Header";
// import AppConfig from "App.config";
// import ExternalInfo from "components/ExternalInfo";

const OTPBox = () => {
  const [otp, setOtp] = useState(new Array(4).fill(""));

  const handleChange = (element, index) => {
    if (isNaN(element.value)) return false;

    setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))]);

    //Focus next input
    if (element.nextSibling) {
      element.nextSibling.focus();
    }
  };

  return (
    <>
      {/* <Header title="Building OTP box using Hooks" /> */}

      {/* <ExternalInfo page="otpBox" /> */}

      <div className={styles.otpDiv}>
        <div className="col text-center">
          <h2>Reset Password</h2>
          <p>OTP code has been sent to 0806 032 0090</p>

          {otp.map((data, index) => {
            return (
              <Input
                className={styles.otpField}
                type="text"
                name="otp"
                maxLength="1"
                size="1"
                key={index}
                value={data}
                onChange={(e) => handleChange(e.target, index)}
                onFocus={(e) => e.target.select()}
                placeholder="_"
              />
            );
          })}

          <p>OTP Entered - {otp.join("")}</p>
          <p>
            {/* <button
              className="btn btn-secondary mr-2"
              onClick={(e) => setOtp([...otp.map((v) => "")])}
            >
              Clear
            </button> */}
            <button
              className="btn btn-primary btn-block"
              onClick={(e) => alert("Entered OTP is " + otp.join(""))}
            >
              Continue
            </button>
          </p>
        </div>
      </div>
    </>
  );
};

export default OTPBox;
