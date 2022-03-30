import React, { useEffect } from "react";
import Layout from "../../layouts/dashboard";
import FundWithdraw from "../../components/wallet/FundWithdraw";
import TransactionHistory from "../../components/wallet/TransactionHistory";

import { useRouter } from "next/router";
import { useSelector } from "react-redux";

const Wallet = () => {
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
      router.push("/wallet");
    } else {
      router.push("/login");
    }
  }, [isLoggedIn]);

  return (
    <>
      <FundWithdraw />
      <TransactionHistory />
    </>
  );
};

export default Wallet;

Wallet.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
