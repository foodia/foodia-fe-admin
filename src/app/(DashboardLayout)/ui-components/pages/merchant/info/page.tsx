"use client";
import { Approvals } from "@/app/(DashboardLayout)/components/api/Approvals";
import { getMerchantDetail } from "@/app/(DashboardLayout)/components/api/Merchant";
import Attachment from "@/app/(DashboardLayout)/components/merchant/Attachment";
import Info from "@/app/(DashboardLayout)/components/merchant/Info";
import Products from "@/app/(DashboardLayout)/components/merchant/Products";
import { useAppContext } from "@/app/(DashboardLayout)/components/shared/Context";
import DashboardCard from "@/app/(DashboardLayout)/components/shared/DashboardCard";
import { ModalPopupApprovals } from "@/app/(DashboardLayout)/components/shared/ModalPopup";
import { Box, Button, Stack, Typography } from "@mui/material";
import { IconBan, IconCircleCheck } from "@tabler/icons-react";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

type Props = {
  id: number;
  ktp_number: string;
  status: string;
  merchant_name: string;
  no_link_aja: string;
  province: string;
  city: string;
  sub_district: string;
  postal_code: string;
  address: string;
  self_photo: string;
  ktp_photo: string;
  oauth: { fullname: string; email: string; phone: string };
  products: {
    id: number;
    name: string;
    description: string;
    price: string;
    qty: number;
    status: string;
  }[];
};

const MerchantInfo = () => {
  const searchParams = useSearchParams();
  const [data, setData] = useState<Props>({
    id: 0,
    ktp_number: "",
    status: "",
    merchant_name: "",
    no_link_aja: "",
    province: "",
    city: "",
    sub_district: "",
    postal_code: "",
    address: "",
    self_photo: "",
    ktp_photo: "",
    oauth: { fullname: "", email: "", phone: "" },
    products: [
      {
        id: 0,
        name: "",
        description: "",
        price: "",
        qty: 0,
        status: "",
      },
    ],
  });

  const [ids, setId] = useState<number>(0);
  const [status, setStatus] = useState("");
  const [name, setName] = useState("");
  const [note, setNote] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const { isLoading, setIsLoading } = useAppContext();
  const [isLoadingModal, setIsLoadingModal] = useState(false);

  const handleOpen = (id: number, status: string, name: string) => {
    setIsOpen(true);
    setName(name);
    setId(id);
    setStatus(status);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    getMerchantDetail(searchParams.get("id"), setData, setIsLoading);
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
      href="/ui-components/pages/merchant"
    >
      Merchant List
    </Button>,
    <Typography fontSize="13px" key="3" color="#999" fontWeight={400}>
      Merchant Details
    </Typography>,
  ];

  return (
    <>
      <DashboardCard title="Merchant Details" breadcrumb={breadcrumbs}>
        <>
          <Info data={data} />
          <Attachment data={data} />
          <Products data={data.products} />
          <Box
            paddingBottom="70px"
            paddingTop="20px"
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            gap="10px"
          >
            <Stack spacing={1} direction="row">
              <Button
                variant="contained"
                size="large"
                color="success"
                disabled={data.status === "approved"}
                onClick={() =>
                  handleOpen(data.id, "approved", data.oauth.fullname)
                }
              >
                <IconCircleCheck size={18} /> Approve
              </Button>
              <Button
                variant="contained"
                size="large"
                color="error"
                disabled={data.status === "rejected"}
                onClick={() =>
                  handleOpen(data.id, "rejected", data.oauth.fullname)
                }
              >
                <IconBan size={16} /> Reject
              </Button>
            </Stack>
          </Box>
        </>
      </DashboardCard>

      <ModalPopupApprovals
        isLoading={isLoadingModal}
        open={isOpen}
        handleClose={handleClose}
        status={status}
        name={name}
        note={note}
        onChange={(e: any) => setNote(e.target.value)}
        handleSubmit={() =>
          Approvals(ids, status, note, setIsOpen, "merchant", setIsLoadingModal)
        }
      />
    </>
  );
};

export default MerchantInfo;
