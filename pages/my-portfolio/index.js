import React from "react";
import Layout from "../../layouts/dashboard";
import PortfolioHud from "../../components/myPortfolio/portfolioHud";
import Investments from "../../components/myPortfolio/investments";

const Settings = () => {
  return (
    <>
      <PortfolioHud />
      <Investments />
    </>
  );
};

export default Settings;

Settings.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
