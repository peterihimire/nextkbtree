import React, {useEffect} from "react";
import Layout from "../../layouts/dashboard";
import PortfolioHud from "../../components/myPortfolio/portfolioHud";
import Investments from "../../components/myPortfolio/investments";
import { useRouter } from "next/router";
// import * as actions from "../../../store/actions";
import { useSelector, useDispatch } from "react-redux";

const MyPortfolio = () => {

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
      router.push("/my-portfolio");
    } else {
      router.push("/login");
    }
  }, [isLoggedIn]);

  return (
    <>
      <PortfolioHud />
      <Investments />
    </>
  );
};

export default MyPortfolio;

MyPortfolio.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
