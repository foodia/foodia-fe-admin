import axios from "axios";

export const getDetonator = (setData: any, setMeta: any) => {
  axios
    .get(
      process.env.NEXT_PUBLIC_BASE + "/detonator/filter?page=1&per_page=10",
      {
        headers: { authorization: `Bearer ${process.env.NEXT_PUBLIC_TOKEN}` },
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

export const getDetonatorDetail = (id: any, setData: any) => {
  axios
    .get(process.env.NEXT_PUBLIC_BASE + `/detonator/fetch/${id}`, {
      headers: { authorization: `Bearer ${process.env.NEXT_PUBLIC_TOKEN}` },
    })
    .then((res) => {
      setData(res.data.body);
    })
    .catch((error) => {});
};
