import React from "react";
import Layout from "../../layouts/dashboard";
import FavouriteContent from "../../components/favourite/favouriteContent";

const Favourite = () => {
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
