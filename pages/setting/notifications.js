import React, { useEffect } from "react";
import Layout from "../../layouts/dashboard";
import SettingSubLayout from "../../layouts/settingz";
import Notification from "../../components/setting/notification";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";

const NotificationSetting = () => {
  const router = useRouter();

  const { error, loading, isLoggedIn } = useSelector((state) => {
    console.log(state);
    return {
      error: state.auth.error,
      loading: state.auth.loading,
      isLoggedIn: state.auth.isLoggedIn,
    };
  });

  useEffect(() => {
    if (isLoggedIn === true) {
      router.push("/setting/notifications");
    } else {
      router.push("/login");
    }
  }, [isLoggedIn]);

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
