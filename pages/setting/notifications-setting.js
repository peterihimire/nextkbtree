import React from "react";
import Layout from "../../layouts/dashboard";
import SettingSubLayout from "../../layouts/settingz";
import Notification from "../../components/setting/notification";

const NotificationSetting = () => {
  return (
    <>
      <Notification />
    </>
  );
};

export default NotificationSetting;

NotificationSetting.getLayout = function getLayout(page) {
  return (
    <Layout>
      <SettingSubLayout>{page}</SettingSubLayout>
    </Layout>
  );
};
