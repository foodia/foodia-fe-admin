"use client";
import { getProductDetail } from "@/app/(DashboardLayout)/components/api/Product";
import Info from "@/app/(DashboardLayout)/components/dashboard/Info";
import { useAppContext } from "@/app/(DashboardLayout)/components/shared/Context";
import DashboardCard from "@/app/(DashboardLayout)/components/shared/DashboardCard";
import { Button, Typography } from "@mui/material";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

type Props = {
  id: number;
  name: string;
  price: string;
  status: string;
  qty: string;
  note: string;
  description: string;
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
  const { isLoading, setIsLoading } = useAppContext();
  const [isOpen, setIsOpen] = useState(false);
  const [ids, setId] = useState<number>(0);
  const [status, setStatus] = useState("");
  const [name, setName] = useState("");
  const [note, setNote] = useState("");
  const [data, setData] = useState<Props>({
    id: 0,
    name: "",
    price: "",
    status: "",
    qty: "",
    note: "",
    description: "",
    merchant: {
      id: 0,
      merchant_name: "",
      self_photo: "",
      status: "",
      oauth: { id: 0, email: "", phone: "" },
    },
    images: [{ id: 0, image_url: "" }],
  });

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

  useEffect(() => {
    setIsLoading(false);
  }, []);

  return (
    <>
      <DashboardCard
        title={
          searchParams.get("detail") === "revenue" ? "Revenue" : "Cash Flow"
        }
        breadcrumb={breadcrumbs}
      >
        <Info data={data} />
      </DashboardCard>
    </>
  );
};

export default DashboardInfo;
