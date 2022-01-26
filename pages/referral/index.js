import React from "react";
import Layout from "../../layouts/dashboard";
import ReferralContent from "../../components/referral/referralContent";
// import DashboardHotInvestment from "../../components/dashboard/hotInvestment";
// import DashboardRecommendInvestment from "../../components/dashboard/recommendInvestment";

const Settings = () => {
  return (
    <>
      <ReferralContent />
      {/* <DashboardRecommendInvestment />
      <DashboardHotInvestment /> */}
    </>
  );
};

export default Settings;

Settings.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
