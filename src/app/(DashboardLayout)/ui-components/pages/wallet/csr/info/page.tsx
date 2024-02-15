"use client";
import Info from "@/app/(DashboardLayout)/components/wallet/csr/Info";
import { useSearchParams } from "next/navigation";
import { useState } from "react";

const CsrInfo = () => {
  const searchParams = useSearchParams();

  const data = [
    {
      donation_by: "OFSASL",
      amount: 1231231,
    },
    {
      donation_by: "OSAOLLFF",
      amount: 1231231,
    },
    {
      donation_by: "VMVASSS",
      amount: 1231231,
    },
  ];

  return (
    <>
      <Info data={data} />
    </>
  );
};

export default CsrInfo;
