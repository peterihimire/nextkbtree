import React , { useEffect } from "react";
import Layout from "../../layouts/dashboard";
import SettingSubLayout from "../../layouts/settingz";
import ChangePassword from "../../components/setting/changePassword";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";

const ChangePasswordSetting = () => {
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
      router.push("/setting/change-password");
    } else {
      router.push("/login");
    }
  }, [isLoggedIn]);
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
