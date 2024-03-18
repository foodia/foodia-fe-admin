import axios from "axios";
import ErrorHandling from "./shared/ErrorHandling";

export const getCampaign = (
  setData: any,
  setMeta: any,
  page: any,
  setIsLoading: any
) => {
  axios
    .get(
      process.env.NEXT_PUBLIC_BASE +
        `/campaign/filter?page=${page}&per_page=5&campaign_status=${
          localStorage.getItem("SearchBy") === "campaign_status"
            ? localStorage.getItem("SearchText")
            : ""
        }&detonator_name=${
          localStorage.getItem("SearchBy") === "detonator_name"
            ? localStorage.getItem("SearchText")
            : ""
        }&event_name=${
          localStorage.getItem("SearchBy") === "event_name"
            ? localStorage.getItem("SearchText")
            : ""
        }&event_type=${
          localStorage.getItem("SearchBy") === "event_type"
            ? localStorage.getItem("SearchText")
            : ""
        }&status=${
          localStorage.getItem("FilterStatus") !== "all"
            ? localStorage.getItem("FilterStatus")
            : ""
        }`,
      {
        headers: { authorization: `Bearer ${localStorage.getItem("TOKEN")}` },
      }
    )
    .then((res) => {
      setData(res.data.body);
      setMeta(res.data.meta);
      setIsLoading(false);
    })
    .catch((error) => {
      ErrorHandling(error);
      setIsLoading(false);
    });
};

export const getCampaignDetail = (id: any, setData: any, setIsLoading: any) => {
  axios
    .get(process.env.NEXT_PUBLIC_BASE + `/campaign/fetch/${id}`, {
      headers: { authorization: `Bearer ${localStorage.getItem("TOKEN")}` },
    })
    .then((res) => {
      setData(res.data.body);
      setIsLoading(false);
    })
    .catch((error) => {
      ErrorHandling(error);
      setIsLoading(false);
    });
};

export const postCampaignPayment = (
  id: any,
  wallet_id: any,
  amount: any,
  onSuccess: any
) => {
  axios
    .post(
      process.env.NEXT_PUBLIC_BASE + `/campaign/payment/${id}`,
      {
        wallet_id: parseInt(wallet_id),
        amount: amount,
      },
      {
        headers: {
          authorization: `Bearer ${localStorage.getItem("TOKEN")}`,
        },
      }
    )
    .then((res) => {
      onSuccess(); // Call the onSuccess function with the response
    })
    .catch((error) => {
      ErrorHandling(error);
    });
};
