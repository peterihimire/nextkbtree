import React from "react";
import Layout from "../../layouts/dashboard";
import FundWithdraw from "../../components/wallet/FundWithdraw";
import TransactionHistory from "../../components/wallet/TransactionHistory";

const Wallet = () => {
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
