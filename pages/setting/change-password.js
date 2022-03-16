import React from "react";
import Layout from "../../layouts/dashboard";
import SettingSubLayout from "../../layouts/settingz";
import ChangePassword from "../../components/setting/changePassword";

const ChangePasswordSetting = () => {
  return (
    <>
      <ChangePassword />
    </>
  );
};

export default ChangePasswordSetting;

ChangePasswordSetting.getLayout = function getLayout(page) {
  return (
    <Layout>
      <SettingSubLayout>{page}</SettingSubLayout>
    </Layout>
  );
};
