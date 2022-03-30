import React, {useEffect} from "react";
import Layout from "../../layouts/dashboard";
import DashboardMyWallet from "../../components/dashboard/myWallet";
import DashboardRecommendInvestment from "../../components/dashboard/recommendInvestment";
import DashboardHotInvestment from "../../components/dashboard/hotInvestment";
import { useRouter } from "next/router";
// import * as actions from "../../../store/actions";
import { useSelector, useDispatch } from "react-redux";

const Dashboard = () => {
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
      router.push("/dashboard");
    } else {
      router.push("/login");
    }
  }, [isLoggedIn]);

  return (
    <>
      <DashboardMyWallet />
      <DashboardRecommendInvestment />
      <DashboardHotInvestment />
    </>
  );
};

export default Dashboard;

Dashboard.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
