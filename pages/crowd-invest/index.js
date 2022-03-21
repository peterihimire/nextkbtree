import React from "react";
import Layout from "../../layouts/dashboard";
import AllInvestments from "../../components/crowdInvest/AllInvestments";

const CrowdInvest = () => {
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
