import React from "react";
import Layout from "../../layouts/auth";
import LoginForm from "../../components/resetPassword";

const ResetPassword = () => {
  return (
    <>
      <LoginForm />
    </>
  );
};

export default ResetPassword;

ResetPassword.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
