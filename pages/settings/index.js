import React from "react";
import Layout from "../../layouts/dashboard";
import SettingsContent from "../../components/settings/settingsContent";
// import DashboardHotInvestment from "../../components/dashboard/hotInvestment";
// import DashboardRecommendInvestment from "../../components/dashboard/recommendInvestment";

const Settings = () => {
  return (
    <>
      <SettingsContent />
      {/* <DashboardRecommendInvestment />
      <DashboardHotInvestment /> */}
    </>
  );
};

export default Settings;

Settings.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
