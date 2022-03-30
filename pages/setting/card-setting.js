import React , { useEffect } from "react";
import Layout from "../../layouts/dashboard";
import SettingSubLayout from "../../layouts/settingz";
import Card from "../../components/setting/card";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";

const CardSetting = () => {
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
      router.push("/setting/card-setting");
    } else {
      router.push("/login");
    }
  }, [isLoggedIn]);
  return (
    <>
      <Card />
    </>
  );
};

export default CardSetting;

CardSetting.getLayout = function getLayout(page) {
  return (
    <Layout>
      <SettingSubLayout>{page}</SettingSubLayout>
    </Layout>
  );
};
