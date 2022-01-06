import React from "react";
import Layout from "../../layouts/auth";
import LoginForm from "../../components/login";

const Login = () => {
  return (
    <>
      <LoginForm />
    </>
  );
};

export default Login;

Login.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
