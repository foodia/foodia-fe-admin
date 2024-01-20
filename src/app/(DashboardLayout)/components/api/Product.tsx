import axios from "axios";

export const getProduct = (setData: any) => {
  axios
    .get(process.env.NEXT_PUBLIC_BASE + "/merchant-product/filter", {
      headers: { authorization: `Bearer ${process.env.NEXT_PUBLIC_TOKEN}` },
    })
    .then((res) => {
      setData(res.data.body);
      // const isRejectedPresent: boolean = res.data.body.some(
      //   (obj: any) => obj.status === "rejected" || obj.status === "waiting"
      // );
      // // console.log(isRejectedPresent);
      // setIsUnapprovedProduct(isRejectedPresent);
    })
    .catch((error) => {});
};

export const getProductDetail = (id: any, setData: any) => {
  axios
    .get(process.env.NEXT_PUBLIC_BASE + `/merchant-product/fetch/${id}`, {
      headers: { authorization: `Bearer ${process.env.NEXT_PUBLIC_TOKEN}` },
    })
    .then((res) => {
      setData(res.data.body);
    })
    .catch((error) => {});
};
