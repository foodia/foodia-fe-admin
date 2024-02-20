"use client";
import { useAppContext } from "@/app/(DashboardLayout)/components/shared/Context";
import Info from "@/app/(DashboardLayout)/components/wallet/agnostic/Info";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const AgnosticInfo = () => {
  const { campaignDonationDetails } = useAppContext();

  console.log("asdadasdas", campaignDonationDetails);

  return (
    <>
      <Info data={campaignDonationDetails} />
    </>
  );
};

export default AgnosticInfo;
