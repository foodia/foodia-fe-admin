import axios from "axios";
import ErrorHandling from "./shared/ErrorHandling";

export const getDetonator = (setData: any, setMeta: any, page: any) => {
  axios
    .get(
      process.env.NEXT_PUBLIC_BASE +
        `/detonator/filter?page=${page}&per_page=5`,
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
    .catch((error: any) => {
      ErrorHandling(error);
    });
};

export const getDetonatorDetail = (id: any, setData: any) => {
  axios
    .get(process.env.NEXT_PUBLIC_BASE + `/detonator/fetch/${id}`, {
      headers: { authorization: `Bearer ${localStorage.getItem("TOKEN")}` },
    })
    .then((res) => {
      setData(res.data.body);
    })
    .catch((error) => {
      ErrorHandling(error);
    });
};
