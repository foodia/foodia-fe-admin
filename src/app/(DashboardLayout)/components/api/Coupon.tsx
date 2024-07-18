import axios from "axios";
import ErrorHandling from "./shared/ErrorHandling";

export const postCouponWalletTopup = (
  id: any,
  csrWallet: any,
  agnosticWallet: any
) => {
  const mergedWallet = [...csrWallet, ...agnosticWallet];

  axios
    .post(
      process.env.NEXT_PUBLIC_BASE + `/coupon-wallet/topup`,
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
      localStorage.setItem("topupSucceed", "true");
      // onSuccess(); // Call the onSuccess function with the response
    })
    .catch((error) => {
      ErrorHandling(error);
    });
};

export const updateCouponWalletPrice = (price: any) => {
  axios
    .put(
      process.env.NEXT_PUBLIC_BASE + `/coupon-wallet/update`,
      {
        price: price,
      },
      {
        headers: { authorization: `Bearer ${localStorage.getItem("TOKEN")}` },
      }
    )
    .then(() => {
      location.reload();
      localStorage.setItem("changeCouponSucceed", "true");
      // setIsLoading(false);
    })
    .catch((err) => {
      ErrorHandling(err);
      // setIsLoading(false);
    });
};

export const getCouponWalletDetail = (setData: any, setIsLoading: any) => {
  axios
    .get(process.env.NEXT_PUBLIC_BASE + `/coupon-wallet/fetch`, {
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

export const getCouponWalletSummary = (setData: any, setIsLoading: any) => {
  axios
    .get(process.env.NEXT_PUBLIC_BASE + `/coupon-wallet/summary`, {
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

export const getCouponWalletTrx = (setData: any, setIsLoading: any) => {
  axios
    .get(process.env.NEXT_PUBLIC_BASE + `/coupon-wallet/transaction`, {
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

export const getCouponWalletTrxDetail = (setData: any, setIsLoading: any) => {
  axios
    .get(process.env.NEXT_PUBLIC_BASE + `/coupon-wallet/transaction/fetch/10`, {
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
