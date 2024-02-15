"use client";
import Info from "@/app/(DashboardLayout)/components/wallet/agnostic/Info";
import { useSearchParams } from "next/navigation";
import { useState } from "react";

const AgnosticInfo = () => {
  const searchParams = useSearchParams();

  const data = [
    {
      donation_by: "addsa",
      amount: 1231231,
    },
    {
      donation_by: "afawfa",
      amount: 1231231,
    },
    {
      donation_by: "fwwfw",
      amount: 1231231,
    },
  ];

  return (
    <>
      <Info data={data} />
    </>
  );
};

export default AgnosticInfo;
