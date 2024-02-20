import axios from "axios";

export const getWalletList = (setData: any, wallet_type: any) => {
  axios
    .get(
      process.env.NEXT_PUBLIC_BASE + `/wallet/list?wallet_type=${wallet_type}`,
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
    })
    .catch((error) => {});
};
