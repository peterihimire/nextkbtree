import React, {useEffect} from "react";
import Layout from "../../layouts/dashboard";
import OrderConfirmation from "../../components/crowdInvest/orderConfirmation";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";

const OrderConfirm = () => {
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
      router.push("/crowd-invest/order-confirmation");
    } else {
      router.push("/login");
    }
  }, [isLoggedIn]);

  return (
    <>
      <OrderConfirmation />
    </>
  );
};

export default OrderConfirm;

OrderConfirm.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
