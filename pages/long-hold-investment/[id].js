import React from "react";
import Layout from "../../layouts/dashboard";
import LongHold from "../../components/longHoldDetails/LongHold";

const LongHoldDetails = () => {
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
