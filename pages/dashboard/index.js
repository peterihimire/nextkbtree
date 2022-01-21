import React from "react";
import Layout from "../../layouts/dashboard";
import DashboardMyWallet from "../../components/dashboard/MyWallet";
import DashboardRecommendInvestment from "../../components/dashboard/recommendInvestment";
import DashboardHotInvestment from "../../components/dashboard/hotInvestment";

const Dashboard = () => {
  return (
    <>
      <DashboardMyWallet />
      <DashboardRecommendInvestment />
      <DashboardHotInvestment />
    </>
  );
};

export default Dashboard;

Dashboard.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
