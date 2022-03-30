import React , { useEffect } from "react";
import Layout from "../../layouts/auth";
import RegisterForm from "../../components/registerMore";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";

const RegisterMore = () => {
  const router = useRouter();

  const { error, loading, isLoggedIn } = useSelector((state) => {
    console.log(state);
    return {
      error: state.auth.error,
      loading: state.auth.loading,
      isLoggedIn: state.auth.isLoggedIn,
    };
  });

  useEffect(() => {
    if (isLoggedIn === true) {
      router.push("/register-more");
    } else {
      router.push("/login");
    }
  }, [isLoggedIn]);
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
