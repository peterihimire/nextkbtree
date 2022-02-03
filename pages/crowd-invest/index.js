import React from "react";
import Layout from "../../layouts/dashboard";
import AllInvestments from "../../components/crowdInvest/AllInvestments";
// import DashboardHotInvestment from "../../components/dashboard/hotInvestment";
// import DashboardRecommendInvestment from "../../components/dashboard/recommendInvestment";

const CrowdInvest = () => {
  return (
    <>
      <AllInvestments />
      {/* <DashboardRecommendInvestment />
      <DashboardHotInvestment /> */}
    </>
  );
};

export default CrowdInvest;

CrowdInvest.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
