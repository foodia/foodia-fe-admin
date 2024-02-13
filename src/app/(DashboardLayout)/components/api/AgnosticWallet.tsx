import axios from "axios";

export const getAgnosticWalletTrx = (setData: any, setMeta: any, page: any) => {
  axios
    .get(
      process.env.NEXT_PUBLIC_BASE +
        `/wallet/transaction?trx_type=agnostic&page=${page}&per_page=5`,
      {
        headers: { authorization: `Bearer ${process.env.NEXT_PUBLIC_TOKEN}` },
      }
    )
    .then((res) => {
      var data: [] = [];
      setData(data);
      console.log(data);
      setMeta(res.data.meta);
      // const isRejectedPresent: boolean = res.data.body.some(
      //   (obj: any) => obj.status === "rejected" || obj.status === "waiting"
      // );
      // // console.log(isRejectedPresent);
      // setIsUnapprovedProduct(isRejectedPresent);
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
        headers: { authorization: `Bearer ${process.env.NEXT_PUBLIC_TOKEN}` },
      }
    )
    .then((res) => {
      var data: [] = [];
      setData(data);
      console.log(data);
      setMeta(res.data.meta);
    })
    .catch((error) => {});
};

export const getAgnosticWalletBallance = (setData: any, setMeta: any) => {
  axios
    .get(
      process.env.NEXT_PUBLIC_BASE + `/wallet/balance?wallet_type=agnostic`,
      {
        headers: { authorization: `Bearer ${process.env.NEXT_PUBLIC_TOKEN}` },
      }
    )
    .then((res) => {
      var data: [] = [];
      setData(data);
      console.log(data);
      setMeta(res.data.meta);
    })
    .catch((error) => {});
};
