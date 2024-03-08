import axios from "axios";
import ErrorHandling from "./shared/ErrorHandling";

export const getProduct = (setData: any, setMeta: any, page: any) => {
  axios
    .get(
      process.env.NEXT_PUBLIC_BASE +
        `/merchant-product/filter?page=${page}&per_page=5`,
      {
        headers: { authorization: `Bearer ${localStorage.getItem("TOKEN")}` },
      }
    )
    .then((res) => {
      setData(res.data.body);
      setMeta(res.data.meta);
      // const isRejectedPresent: boolean = res.data.body.some(
      //   (obj: any) => obj.status === "rejected" || obj.status === "waiting"
      // );
      // // console.log(isRejectedPresent);
      // setIsUnapprovedProduct(isRejectedPresent);
    })
    .catch((error) => {
      ErrorHandling(error);
    });
};

export const getProductDetail = (id: any, setData: any) => {
  axios
    .get(process.env.NEXT_PUBLIC_BASE + `/merchant-product/fetch/${id}`, {
      headers: { authorization: `Bearer ${localStorage.getItem("TOKEN")}` },
    })
    .then((res) => {
      setData(res.data.body);
    })
    .catch((error) => {
      ErrorHandling(error);
    });
};
