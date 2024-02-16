import axios from "axios";

export const getCsrWalletCurrent = (setData: any, setMeta: any, page: any) => {
  axios
    .get(
      process.env.NEXT_PUBLIC_BASE +
        `/wallet/csr-current?page=${page}&per_page=5`,
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
      // const isRejectedPresent: boolean = res.data.body.some(
      //   (obj: any) => obj.status === "rejected" || obj.status === "waiting"
      // );
      // // console.log(isRejectedPresent);
      // setIsUnapprovedProduct(isRejectedPresent);
    })
    .catch((error) => {});
};

export const getCsrWalletTrx = (setData: any, setMeta: any, page: any) => {
  axios
    .get(
      process.env.NEXT_PUBLIC_BASE +
        `/wallet/transaction?trx_type=csr&page=${page}&per_page=5`,
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

export const getCsrWalletCampaign = (setData: any, setMeta: any, page: any) => {
  axios
    .get(
      process.env.NEXT_PUBLIC_BASE +
        `/wallet/campaign-report?wallet_type=csr&page=${page}&per_page=5`,
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

export const getCsrWalletMerchant = (setData: any, setMeta: any, page: any) => {
  axios
    .get(
      process.env.NEXT_PUBLIC_BASE +
        `/wallet/merchant-payment?page=${page}&per_page=3`,
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

export const getCsrWalletBallance = (setData: any, setMeta: any) => {
  axios
    .get(process.env.NEXT_PUBLIC_BASE + `/wallet/balance?wallet_type=csr`, {
      headers: { authorization: `Bearer ${localStorage.getItem("TOKEN")}` },
    })
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
