import React from "react";
import Layout from "../../layouts/dashboard";
import SettingSubLayout from "../../layouts/settingz";

const Setting = () => {
  return <></>;
};

export async function getServerSideProps() {
  return {
    redirect: {
      permanent: false,
      destination: "/setting/profile-setting",
    },
  };

  //   return {
  //     props: {},
  //   };
}

export default Setting;

Setting.getLayout = function getLayout(page) {
  return (
    <Layout>
      <SettingSubLayout>{page}</SettingSubLayout>
    </Layout>
  );
};
