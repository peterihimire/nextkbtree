import React from "react";
import Layout from "../../layouts/dashboard";
import DashboardMyWallet from "../../components/crowdInvest/myWallet";
// import DashboardHotInvestment from "../../components/dashboard/hotInvestment";
// import DashboardRecommendInvestment from "../../components/dashboard/recommendInvestment";

const Dashboard = () => {
  return (
    <>
      <DashboardMyWallet />
      {/* <DashboardRecommendInvestment />
      <DashboardHotInvestment /> */}
    </>
  );
};

export default Dashboard;

Dashboard.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
