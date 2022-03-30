import React , { useEffect } from "react";
import Layout from "../../layouts/dashboard";
import ReferralContent from "../../components/referral/referralContent";
// import DashboardHotInvestment from "../../components/dashboard/hotInvestment";
// import DashboardRecommendInvestment from "../../components/dashboard/recommendInvestment";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";

const Settings = () => {
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
      router.push("/referral");
    } else {
      router.push("/login");
    }
  }, [isLoggedIn]);
  return (
    <>
      <ReferralContent />
      {/* <DashboardRecommendInvestment />
      <DashboardHotInvestment /> */}
    </>
  );
};

export default Settings;

Settings.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
