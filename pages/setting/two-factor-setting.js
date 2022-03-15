import React from "react";
import Layout from "../../layouts/dashboard";
import SettingSubLayout from "../../layouts/settingz";
import TwoFactorAuth from "../../components/setting/twoFactorAuth";

const TwoFactorAuthSetting = () => {
  return (
    <>
      <TwoFactorAuth />
    </>
  );
};

export default TwoFactorAuthSetting;

TwoFactorAuthSetting.getLayout = function getLayout(page) {
  return (
    <Layout>
      <SettingSubLayout>{page}</SettingSubLayout>
    </Layout>
  );
};
