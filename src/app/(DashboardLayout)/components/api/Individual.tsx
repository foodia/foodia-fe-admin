import axios from "axios";

export const getIndividual = (setData: any, setMeta: any, page: any) => {
  axios
    .get(
      process.env.NEXT_PUBLIC_BASE +
        `/individual/filter?page=${page}&per_page=10`,
      {
        headers: { authorization: `Bearer ${localStorage.getItem("TOKEN")}` },
      }
    )
    .then((res) => {
      setData(res.data.body);
      setMeta(res.data.meta);
      // const isRejectedPresent: boolean = res.data.body.some(
      //   (obj: any) => obj.status === "waiting" || obj.status === "rejected"
      // );
      // setIsUnapprovedDetonator(isRejectedPresent);
    })
    .catch((error) => {});
};

export const getIndividualDetail = (id: any, setData: any) => {
  axios
    .get(process.env.NEXT_PUBLIC_BASE + `/individual/fetch/${id}`, {
      headers: { authorization: `Bearer ${localStorage.getItem("TOKEN")}` },
    })
    .then((res) => {
      setData(res.data.body);
    })
    .catch((error) => {});
};
