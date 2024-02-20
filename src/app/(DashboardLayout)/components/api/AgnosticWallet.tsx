import axios from "axios";

export const getAgnosticWalletTrx = (setData: any, setMeta: any, page: any) => {
  axios
    .get(
      process.env.NEXT_PUBLIC_BASE +
        `/wallet/transaction?trx_type=agnostic&page=${page}&per_page=5`,
      {
        headers: { authorization: `Bearer ${localStorage.getItem("TOKEN")}` },
      }
    )
    .then((res) => {
      var data: [] = [];
      if (res.data.body.length > 0) {
        data = res.data.body;
      }
      setData(data);
      setMeta(res.data.meta);
    })
    .catch((error) => {});
};

export const getAgnosticWalletCampaign = (
  setData: any,
  setMeta: any,
  page: any
) => {
  axios
    .get(
      process.env.NEXT_PUBLIC_BASE +
        `/wallet/campaign-report?wallet_type=agnostic&page=${page}&per_page=5`,
      {
        headers: { authorization: `Bearer ${localStorage.getItem("TOKEN")}` },
      }
    )
    .then((res) => {
      var data: [] = [];
      var details: [] = [];
      if (res.data.body.length > 0) {
        data = res.data.body;
      }
      setData(data);
      setMeta(res.data.meta);
    })
    .catch((error) => {});
};

// export const getAgnosticWalletCampaignDonationDetails = (
//   setData: any,
//   setMeta: any,
//   page: any
// ) => {
//   axios
//     .get(
//       process.env.NEXT_PUBLIC_BASE +
//         `/wallet/campaign-report?wallet_type=agnostic&page=${page}&per_page=5`,
//       {
//         headers: { authorization: `Bearer ${localStorage.getItem("TOKEN")}` },
//       }
//     )
//     .then((res) => {
//       var data: [] = [];

//       if (res.data.body.length > 0) {
//         data = res.data.body;
//       }

//       setData(data);
//       setMeta(res.data.meta);
//     })
//     .catch((error) => {});
// };

export const getAgnosticWalletBallance = (setData: any, setMeta: any) => {
  axios
    .get(
      process.env.NEXT_PUBLIC_BASE + `/wallet/balance?wallet_type=agnostic`,
      {
        headers: { authorization: `Bearer ${localStorage.getItem("TOKEN")}` },
      }
    )
    .then((res) => {
      setData(res.data.body);
      setMeta(res.data.meta);
    })
    .catch((error) => {});
};
