import React, {useEffect} from "react";
import Layout from "../../layouts/dashboard";
import LongHold from "../../components/longHoldDetails/LongHold";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";

const LongHoldDetails = () => {
  // const router = useRouter();

  // const { error, loading, isLoggedIn } = useSelector((state) => {
  //   console.log(state);
  //   return {
  //     error: state.auth.error,
  //     loading: state.auth.loading,
  //     isLoggedIn: state.auth.isLoggedIn,
  //   };
  // });

  // useEffect(() => {
  //   if (isLoggedIn === true) {
  //     router.push("/long-hold-investment/");
  //   } else {
  //     router.push("/login");
  //   }
  // }, [isLoggedIn]);

  return (
    <>
      <LongHold />
    </>
  );
};

export default LongHoldDetails;

LongHoldDetails.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
