import axios from "axios";

export const getCampaign = (setData: any, setMeta?: any) => {
  axios
    .get(process.env.NEXT_PUBLIC_BASE + "/campaign/filter", {
      headers: { authorization: `Bearer ${localStorage.getItem("TOKEN")}` },
    })
    .then((res) => {
      setData(res.data.body);
      setMeta(res.data.meta);
      // const isRejectedPresent: boolean = res.data.body.some(
      //   (obj: any) => obj.status === "waiting"
      // );
      // setIsUnapprovedCampaign(isRejectedPresent);
    })
    .catch((error) => {});
};

export const getCampaignDetail = (id: any, setData: any) => {
  axios
    .get(process.env.NEXT_PUBLIC_BASE + `/campaign/fetch/${id}`, {
      headers: { authorization: `Bearer ${localStorage.getItem("TOKEN")}` },
    })
    .then((res) => {
      setData(res.data.body);
    })
    .catch((error) => {});
};
