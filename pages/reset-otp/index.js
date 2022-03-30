import React , { useEffect } from "react";
import Layout from "../../layouts/auth";
import ResetOtpForm from "../../components/resetOtp";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";

const ResetOtp = () => {
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
      router.push("/reset-otp");
    } else {
      router.push("/login");
    }
  }, [isLoggedIn]);
  return (
    <>
      <ResetOtpForm />
    </>
  );
};

export default ResetOtp;

ResetOtp.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
