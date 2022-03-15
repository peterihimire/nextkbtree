import React from "react";
import Layout from "../../layouts/dashboard";
import SettingSubLayout from "../../layouts/settingz";
import Card from "../../components/setting/card";

const CardSetting = () => {
  return (
    <>
      <Card />
    </>
  );
};

export default CardSetting;

CardSetting.getLayout = function getLayout(page) {
  return (
    <Layout>
      <SettingSubLayout>{page}</SettingSubLayout>
    </Layout>
  );
};
