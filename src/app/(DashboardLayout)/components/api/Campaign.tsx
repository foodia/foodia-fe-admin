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

export const getCampaignDetail = (
  id: any,
  setData: any,
  setNeeded: any,
  setIsLoading: any
) => {
  axios
    .get(process.env.NEXT_PUBLIC_BASE + `/campaign/fetch/${id}`, {
      headers: { authorization: `Bearer ${localStorage.getItem("TOKEN")}` },
    })
    .then((res) => {
      setData(res.data.body);
      setNeeded(
        res.data.body.donation_target - res.data.body.donation_collected
      );
      setIsLoading(false);
    })
    .catch((error) => {
      ErrorHandling(error);
      setIsLoading(false);
    });
};

export const postCampaignPayment = (
  id: any,
  csrWallet: any,
  agnosticWallet: any
) => {
  const mergedWallet = [...csrWallet, ...agnosticWallet];

  axios
    .post(
      process.env.NEXT_PUBLIC_BASE + `/campaign/payment/${id}`,
      {
        details: mergedWallet,
      },
      {
        headers: {
          authorization: `Bearer ${localStorage.getItem("TOKEN")}`,
        },
      }
    )
    .then((res) => {
      location.reload();
      localStorage.setItem("addDonationSucceed", "true");
      // onSuccess(); // Call the onSuccess function with the response
    })
    .catch((error) => {
      ErrorHandling(error);
    });
};

export const getCampaignSummary = (setData: any, setIsLoading: any) => {
  axios
    .get(process.env.NEXT_PUBLIC_BASE + `/general-report/campaign/summary`, {
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
