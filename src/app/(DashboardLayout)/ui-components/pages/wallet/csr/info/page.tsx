"use client";
import { useAppContext } from "@/app/(DashboardLayout)/components/shared/Context";
import Info from "@/app/(DashboardLayout)/components/wallet/csr/Info";
import { useSearchParams } from "next/navigation";
import { useState } from "react";

const CsrInfo = () => {
  const { campaignDonationDetails } = useAppContext();

  return (
    <>
      <Info data={campaignDonationDetails} />
    </>
  );
};

export default CsrInfo;
