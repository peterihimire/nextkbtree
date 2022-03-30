import React, { useEffect } from "react";
import Layout from "../../layouts/dashboard";
import AllInvestments from "../../components/crowdInvest/AllInvestments";
import { useRouter } from "next/router";
// import * as actions from "../../../store/actions";
import { useSelector, useDispatch } from "react-redux";

const CrowdInvest = () => {
  const router = useRouter();

  const { error, loading, isLoggedIn } = useSelector((state) => {
    console.log(state);
    return {
      error: state.auth.error,
      loading: state.auth.loading,
      currentUser: state.auth.currentUser,
      isLoggedIn: state.auth.isLoggedIn,
    };
  });

  useEffect(() => {
    if (isLoggedIn === true) {
      router.push("/crowd-invest");
    } else {
      router.push("/login");
    }
  }, [isLoggedIn]);

  return (
    <>
      <AllInvestments />
    </>
  );
};

export default CrowdInvest;

CrowdInvest.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
