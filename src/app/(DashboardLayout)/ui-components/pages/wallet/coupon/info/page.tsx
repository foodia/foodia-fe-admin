"use client";
import { getCouponWalletTrxDetail } from "@/app/(DashboardLayout)/components/api/Coupon";
import { getDetonatorDetail } from "@/app/(DashboardLayout)/components/api/Detonator";
import Info from "@/app/(DashboardLayout)/components/wallet/coupon/Info";
import { useAppContext } from "@/app/(DashboardLayout)/components/shared/Context";
import DashboardCard from "@/app/(DashboardLayout)/components/shared/DashboardCard";
import { Box, Button, Typography } from "@mui/material";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import TrxEvidences from "@/app/(DashboardLayout)/components/wallet/coupon/TrxEvidences";

type Props = {
  id: number;
  ktp_number: string;
  status: string;
  self_photo: string;
  ktp_photo: string;
  oauth: { fullname: string; email: string; phone: string };
};

const DetonatorInfo = () => {
  const searchParams = useSearchParams();
  const { isLoading, setIsLoading } = useAppContext();
  const [data, setData] = useState<any>({});
  useEffect(() => {
    getCouponWalletTrxDetail(setData, setIsLoading, searchParams.get("id"));
  }, []);

  const breadcrumbs = [
    <Button
      key={0}
      sx={{
        p: 0,
        fontSize: "13px",
        color: "#000",
        fontWeight: 400,
        ":hover": { color: "blue" },
      }}
      href="/ui-components/pages/wallet/coupon"
    >
      Coupon Wallet
    </Button>,
    <Typography fontSize="13px" key="3" color="#999" fontWeight={400}>
      Coupon Transaction Detail
    </Typography>,
  ];

  return (
    <>
      <DashboardCard title="Coupon Detail" breadcrumb={breadcrumbs}>
        <>
          <Box
            sx={{
              display: "flex",
              justifyContent: "end",
              gap: "10px",
              alignItems: "center",
              paddingBottom: "40px",
            }}
          >
            <Typography
              sx={{
                fontWeight: "bold",
                fontSize: "20px",
              }}
            >
              ID Transaction :
            </Typography>
            <Typography
              sx={{
                color: "#3FB648",
                fontWeight: "bold",
                fontSize: "20px",
              }}
            >
              {data.qr_code}
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              paddingBottom: "100px",
            }}
          >
            <Info data={data} isLoading={isLoading} />
            <hr color="#6CB28E" />
            <TrxEvidences data={data} isLoading={isLoading} />
          </Box>
        </>
      </DashboardCard>
    </>
  );
};

export default DetonatorInfo;
