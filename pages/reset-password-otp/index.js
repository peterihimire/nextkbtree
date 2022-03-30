import React , { useEffect } from "react";
import Layout from "../../layouts/auth";
import ResetPasswordOtpForm from "../../components/resetPasswordOtp";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";

const ResetPasswordOtp = () => {
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
      router.push("/reset-password-otp");
    } else {
      router.push("/login");
    }
  }, [isLoggedIn]);
  return (
    <>
      <ResetPasswordOtpForm />
    </>
  );
};

export default ResetPasswordOtp;

ResetPasswordOtp.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
