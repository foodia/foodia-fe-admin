"use client";
import { useAppContext } from "@/app/(DashboardLayout)/components/shared/Context";
import Info from "@/app/(DashboardLayout)/components/wallet/agnostic/Info";

const AgnosticInfo = () => {
  const { campaignDonationDetails } = useAppContext();

  return (
    <>
      <Info data={campaignDonationDetails} />
    </>
  );
};

export default AgnosticInfo;
