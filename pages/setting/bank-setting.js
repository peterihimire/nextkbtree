import React from "react";
import Layout from "../../layouts/dashboard";
import SettingSubLayout from "../../layouts/settingz";
import Bank from "../../components/setting/bank";

const BankSetting = () => {
  return (
    <>
      <Bank />
    </>
  );
};

export default BankSetting;

BankSetting.getLayout = function getLayout(page) {
  return (
    <Layout>
      <SettingSubLayout>{page}</SettingSubLayout>
    </Layout>
  );
};
