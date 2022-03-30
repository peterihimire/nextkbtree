import React, {useState, useEffect } from "react";
import Layout from "../../layouts/dashboard";
import LongHold from "../../components/longHoldDetails/LongHold";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";

const LongHoldDetails = () => {
  const [id , setId] = useState(null)
  const router = useRouter();
  console.log(router);
  console.log(router.query.id);
  // let id = router.query.id;

  const { error, loading, isLoggedIn } = useSelector((state) => {
    // console.log(state);
    return {
      error: state.auth.error,
      loading: state.auth.loading,
      isLoggedIn: state.auth.isLoggedIn,
    };
  });

  useEffect(() => {
    let id = router.query.id;
    setId(id)
  }, [router.query.id]);

  useEffect(() => {
    if (isLoggedIn === true) {
      router.push(`/long-hold-investment/${id}`);
      // router.push(`/long-hold-investment/2`);
    } else {
      router.push("/login");
    }
  }, [isLoggedIn]);

  return (
    <>
      <LongHold />
    </>
  );
};

export default LongHoldDetails;

LongHoldDetails.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
