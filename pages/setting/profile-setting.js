import React, { useEffect } from "react";
import Layout from "../../layouts/dashboard";
import SettingSubLayout from "../../layouts/settingz";
import Index from "../../components/setting/profile";

import { useRouter } from "next/router";
import { useSelector } from "react-redux";

const ProfileSetting = () => {
  const router = useRouter();

  const { error, loading, isLoggedIn } = useSelector((state) => {
    console.log(state);
    return {
      error: state.auth.error,
      loading: state.auth.loading,
      currentUser: state.auth.currentUser,
      isLoggedIn: state.auth.isLoggedIn,
    };
  });

  useEffect(() => {
    if (isLoggedIn === true) {
      router.push("/setting/profile-setting");
    } else {
      router.push("/login");
    }
  }, [isLoggedIn]);

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
