import React from "react";
import Layout from "../../layouts/auth";
import ResetPasswordForm from "../../components/resetPassword";

const ResetPassword = () => {
  return (
    <>
      <ResetPasswordForm />
    </>
  );
};

export default ResetPassword;

ResetPassword.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
