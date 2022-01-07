import React from "react";
import Layout from "../../layouts/auth";
import RegisterForm from "../../components/register";

const Login = () => {
  return (
    <>
      <RegisterForm />
    </>
  );
};

export default Login;

Login.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
