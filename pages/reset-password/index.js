import React , { useEffect } from "react";
import Layout from "../../layouts/auth";
import ResetPasswordForm from "../../components/resetPassword";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";

const ResetPassword = () => {
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
      router.push("/reset-password");
    } else {
      router.push("/login");
    }
  }, [isLoggedIn]);
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
