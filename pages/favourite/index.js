import React , { useEffect } from "react";
import Layout from "../../layouts/dashboard";
import FavouriteContent from "../../components/favourite/favouriteContent";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";

const Favourite = () => {
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
      router.push("/favourite");
    } else {
      router.push("/login");
    }
  }, [isLoggedIn]);
  return (
    <>
      <FavouriteContent />
    </>
  );
};

export default Favourite;

Favourite.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
