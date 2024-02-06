import axios from "axios";

export const getCsrWalletCurrent = (setData: any, setMeta: any) => {
  axios
    .get(process.env.NEXT_PUBLIC_BASE + "/wallet/csr-current", {
      headers: { authorization: `Bearer ${process.env.NEXT_PUBLIC_TOKEN}` },
    })
    .then((res) => {
      setData(res.data.body);
      setMeta(res.data.meta);
      // const isRejectedPresent: boolean = res.data.body.some(
      //   (obj: any) => obj.status === "rejected" || obj.status === "waiting"
      // );
      // // console.log(isRejectedPresent);
      // setIsUnapprovedProduct(isRejectedPresent);
    })
    .catch((error) => {});
};

export const getCsrWalletTrx = (setData: any, setMeta: any) => {
  axios
    .get(process.env.NEXT_PUBLIC_BASE + `/wallet/transaction?trx_type=csr`, {
      headers: { authorization: `Bearer ${process.env.NEXT_PUBLIC_TOKEN}` },
    })
    .then((res) => {
      setData(res.data.body);
      setMeta(res.data.meta);
    })
    .catch((error) => {});
};

export const getCsrWalletCampaign = (setData: any, setMeta: any) => {
  axios
    .get(
      process.env.NEXT_PUBLIC_BASE + `/wallet/campaign-report?wallet_type=csr`,
      {
        headers: { authorization: `Bearer ${process.env.NEXT_PUBLIC_TOKEN}` },
      }
    )
    .then((res) => {
      setData(res.data.body);
      setMeta(res.data.meta);
    })
    .catch((error) => {});
};

export const getCsrWalletMerchant = (setData: any, setMeta: any) => {
  axios
    .get(process.env.NEXT_PUBLIC_BASE + `/wallet/merchant-payment`, {
      headers: { authorization: `Bearer ${process.env.NEXT_PUBLIC_TOKEN}` },
    })
    .then((res) => {
      setData(res.data.body);
      setMeta(res.data.meta);
    })
    .catch((error) => {});
};
