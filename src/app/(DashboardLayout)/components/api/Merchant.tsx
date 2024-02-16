import axios from "axios";

export const getMerchant = (setData: any, setMeta: any) => {
  axios
    .get(process.env.NEXT_PUBLIC_BASE + "/merchant/filter", {
      headers: { authorization: `Bearer ${localStorage.getItem("TOKEN")}` },
    })
    .then((res) => {
      setData(res.data.body);
      setMeta(res.data.meta);
      // const isRejectedPresent: boolean = res.data.body.some(
      //   (obj: any) => obj.status === "rejected" || obj.status === "waiting"
      // );
      // // console.log(isRejectedPresent);
      // setIsUnapprovedMerchant(isRejectedPresent);
    })
    .catch((error) => {});
};

export const getMerchantDetail = (id: any, setData: any) => {
  axios
    .get(process.env.NEXT_PUBLIC_BASE + `/merchant/fetch/${id}`, {
      headers: { authorization: `Bearer ${localStorage.getItem("TOKEN")}` },
    })
    .then((res) => {
      setData(res.data.body);
    })
    .catch((error) => {});
};
