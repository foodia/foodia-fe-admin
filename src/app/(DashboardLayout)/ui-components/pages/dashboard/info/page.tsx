"use client";
import Info from "@/app/(DashboardLayout)/components/dashboard/Info";
import { useAppContext } from "@/app/(DashboardLayout)/components/shared/Context";
import DashboardCard from "@/app/(DashboardLayout)/components/shared/DashboardCard";
import { Button, SelectChangeEvent, Typography } from "@mui/material";
import moment from "moment";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { useEffect, useState } from "react";

type Props = {
  id: number;
  name: string;
  price: string;
  status: string;
  qty: string;
  note: string;
  description: string;
  total_amount: number;
  merchant: {
    id: number;
    merchant_name: string;
    self_photo: any;
    status: string;
    oauth: { id: number; email: string; phone: string };
  };
  images: [{ id: number; image_url: string }];
};

const DashboardInfo = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const [filterYear, setFilterYear] = useState(searchParams.get("year"));

  const onChangeFilterYear = (event: SelectChangeEvent) => {
    setFilterYear(event.target.value);
    router.push(
      `${pathname}?detail=${searchParams.get(
        "detail"
      )}&month=${searchParams.get("month")}&year=${event.target.value}`
    );
  };

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
      href="/ui-components/pages/dashboard"
    >
      Dashboard
    </Button>,
    <Typography fontSize="13px" key="3" color="#999" fontWeight={400}>
      {searchParams.get("detail") === "revenue" ? "Revenue" : "Cash Flow"}
    </Typography>,
  ];

  return (
    <>
      <DashboardCard
        title={
          searchParams.get("detail") === "revenue" ? "Revenue" : "Cash Flow"
        }
        breadcrumb={breadcrumbs}
        filterYear={true}
        filterYearValue={filterYear}
        onChangeFilterYear={onChangeFilterYear}
      >
        <Info
          filterYearValue={filterYear}
          onChangeFilterYear={onChangeFilterYear}
        />
      </DashboardCard>
    </>
  );
};

export default DashboardInfo;
