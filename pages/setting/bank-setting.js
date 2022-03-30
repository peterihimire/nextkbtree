import React , { useEffect } from "react";
import Layout from "../../layouts/dashboard";
import SettingSubLayout from "../../layouts/settingz";
import Bank from "../../components/setting/bank";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";

const BankSetting = () => {
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
      router.push("/setting/bank-setting");
    } else {
      router.push("/login");
    }
  }, [isLoggedIn]);
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
