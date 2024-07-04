import axios from "axios";
import ErrorHandling from "./shared/ErrorHandling";

export const postCouponWalletTopup = (
  setData: any,
  setIsLoading: any,
  data: any
) => {
  axios
    .post(process.env.NEXT_PUBLIC_BASE + `/coupon-wallet/topup`, data, {
      headers: { authorization: `Bearer ${localStorage.getItem("TOKEN")}` },
    })
    .then(() => {
      setIsLoading(false);
    })
    .catch(() => {
      setIsLoading(false);
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
