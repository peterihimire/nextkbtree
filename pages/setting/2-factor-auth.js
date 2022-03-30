import React, { useEffect } from "react";
import Layout from "../../layouts/dashboard";
import SettingSubLayout from "../../layouts/settingz";
import TwoFactorAuth from "../../components/setting/twoFactorAuth";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";

const TwoFactorAuthSetting = () => {
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
      router.push("/setting/2-factor-auth");
    } else {
      router.push("/login");
    }
  }, [isLoggedIn]);
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
