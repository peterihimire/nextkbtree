import React from "react";
import Layout from "../../layouts/dashboard";
import OrderConfirmation from "../../components/crowdInvest/orderConfirmation";

const OrderConfirm = () => {
  return (
    <>
      <OrderConfirmation />
    </>
  );
};

export default OrderConfirm;

OrderConfirm.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
