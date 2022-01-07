import React from "react";
import Layout from "../../layouts/auth";
import ForgotPasswordForm from "../../components/forgotPassword";

const ResetPassword = () => {
  return (
    <>
      <ForgotPasswordForm />
    </>
  );
};

export default ResetPassword;

ResetPassword.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
