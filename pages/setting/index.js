// import React from "react";
// import Layout from "../../layouts/dashboard";
// import SettingsContent from "../../components/settings/settingsContent";
// // import DashboardHotInvestment from "../../components/dashboard/hotInvestment";
// // import DashboardRecommendInvestment from "../../components/dashboard/recommendInvestment";

// const Settings = () => {
//   return (
//     <>
//       <SettingsContent />
//       {/* <DashboardRecommendInvestment />
//       <DashboardHotInvestment /> */}
//     </>
//   );
// };

// export default Settings;

// Settings.getLayout = function getLayout(page) {
//   return <Layout>{page}</Layout>;
// };
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
