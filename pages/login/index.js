import React, { useEffect } from "react";
import Layout from "../../layouts/auth";
import LoginForm from "../../components/login";
import { useRouter } from "next/router";
// import * as actions from "../../../store/actions";
import { useSelector, useDispatch } from "react-redux";

const Login = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  const { error, loading, isLoggedIn, currentUser } = useSelector((state) => {
    console.log(state);
    return {
      error: state.auth.error,
      loading: state.auth.loading,
      currentUser: state.auth.currentUser,
      isLoggedIn: state.auth.isLoggedIn,
    };
  });
  console.log(currentUser);
  console.log(isLoggedIn);
  // const setLocalStorage = () => {
  //   if (typeof window !== "undefined") {
  //     return localStorage.setItem("userToken", JSON.stringify(currentUser));
  //   }
  // };

  useEffect(() => {
    if (isLoggedIn === true) {
      router.push("/dashboard");
    } else {
      router.push("/login");
    }
  }, [isLoggedIn]);

  // useEffect(() => {
  //   if (currentUser) {
  //     router.push("/dashboard");
  //   }
  // }, [currentUser]);

  useEffect(() => {
    // setLocalStorage;
    localStorage.setItem("userToken", JSON.stringify(currentUser));
  }, [currentUser]);

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
