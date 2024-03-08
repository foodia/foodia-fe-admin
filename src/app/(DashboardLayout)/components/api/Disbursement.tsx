import axios from "axios";
import ErrorHandling from "./shared/ErrorHandling";

export const getDisbursement = (setData: any, setMeta: any, page: any) => {
  axios
    .get(
      process.env.NEXT_PUBLIC_BASE +
        `/disbursement/filter?page=${page}&per_page=5`,
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

export const getDisbursementDetail = (id: any, setData: any) => {
  axios
    .get(process.env.NEXT_PUBLIC_BASE + `/disbursement/fetch/${id}`, {
      headers: { authorization: `Bearer ${localStorage.getItem("TOKEN")}` },
    })
    .then((res) => {
      setData(res.data.body);
    })
    .catch((error) => {});
};

export const ApprovalsDisbursement = (
  id: number,
  status: string,
  note: any,
  setIsOpen: any
) => {
  {
    status === "approved"
      ? axios
          .post(
            process.env.NEXT_PUBLIC_BASE + `/disbursement/approved/${id}`,
            {},
            {
              headers: {
                authorization: `Bearer ${localStorage.getItem("TOKEN")}`,
              },
            }
          )
          .then((res) => {
            // getDetonatorDetail();
            location.reload();
            setIsOpen(false);
          })
          .catch((error) => {
            ErrorHandling(error);
          })
      : axios
          .post(
            process.env.NEXT_PUBLIC_BASE + `/disbursement/rejected/${id}`,
            { note },
            {
              headers: {
                authorization: `Bearer ${localStorage.getItem("TOKEN")}`,
              },
            }
          )
          .then((res) => {
            // getDetonatorDetail();
            location.reload();
            setIsOpen(false);
          })
          .catch((error) => {
            ErrorHandling(error);
          });
  }
};
