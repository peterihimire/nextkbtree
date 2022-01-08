import React from "react";
import Layout from "../../layouts/auth";
import ResetOtpForm from "../../components/resetOtp";

const ResetOtp = () => {
  return (
    <>
      <ResetOtpForm />
    </>
  );
};

export default ResetOtp;

ResetOtp.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
