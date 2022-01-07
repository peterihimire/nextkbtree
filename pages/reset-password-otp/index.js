import React from "react";
import Layout from "../../layouts/auth";
import ResetPasswordOtpForm from "../../components/resetPasswordOtp";

const ResetPasswordOtp = () => {
  return (
    <>
      <ResetPasswordOtpForm />
    </>
  );
};

export default ResetPasswordOtp;

ResetPasswordOtp.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
