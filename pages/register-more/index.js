import React from "react";
import Layout from "../../layouts/auth";
import RegisterForm from "../../components/registerMore";

const RegisterMore = () => {
  return (
    <>
      <RegisterForm />
    </>
  );
};

export default RegisterMore;

RegisterMore.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
