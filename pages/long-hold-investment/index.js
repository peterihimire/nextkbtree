import React from "react";
import Layout from "../../layouts/dashboard";
import AllInvestments from "../../components/longHoldInvestment/LandHome";
// import DashboardHotInvestment from "../../components/dashboard/hotInvestment";
// import DashboardRecommendInvestment from "../../components/dashboard/recommendInvestment";

const LongHoldInvestment = () => {
  return (
    <>
      <AllInvestments />
      {/* <DashboardRecommendInvestment />
      <DashboardHotInvestment /> */}
    </>
  );
};

export default LongHoldInvestment;

LongHoldInvestment.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
