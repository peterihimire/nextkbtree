import React from "react";
import Layout from "../../layouts/auth";
import Form from "../../components/register";

const Login = () => {
  return (
    <>
      <Form />
    </>
  );
};

export default Login;

Login.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
