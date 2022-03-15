import React from "react";
import Layout from "../../layouts/dashboard";
import SettingSubLayout from "../../layouts/settingz";
import Index from "../../components/setting/profile";

const ProfileSetting = () => {
  return (
    <>
      <Index />
    </>
  );
};

export default ProfileSetting;

ProfileSetting.getLayout = function getLayout(page) {
  return (
    <Layout>
      <SettingSubLayout>{page}</SettingSubLayout>
    </Layout>
  );
};
