"use client";
import {
  Box,
  Button,
  Grid,
  Modal,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import Info from "@/app/(DashboardLayout)/components/merchant/Info";
import Attachment from "@/app/(DashboardLayout)/components/merchant/Attachment";
import { useSearchParams } from "next/navigation";
import axios from "axios";
import { IconBan, IconCircleCheck, IconClock } from "@tabler/icons-react";
import { getMerchantDetail } from "@/app/(DashboardLayout)/components/api/Merchant";
import { Approvals } from "@/app/(DashboardLayout)/components/api/Approvals";
import DetailCard from "@/app/(DashboardLayout)/components/shared/DetailCard";
import DashboardCard from "@/app/(DashboardLayout)/components/shared/DashboardCard";
import { ModalPopupApprovals } from "@/app/(DashboardLayout)/components/shared/ModalPopup";

type Props = {
  id: number;
  ktp_number: string;
  status: string;
  no_link_aja: string;
  province: string;
  city: string;
  sub_district: string;
  postal_code: string;
  address: string;
  self_photo: string;
  ktp_photo: string;
  oauth: { fullname: string; email: string; phone: string };
};

const MerchantInfo = () => {
  const searchParams = useSearchParams();
  const [data, setData] = useState<Props>({
    id: 0,
    ktp_number: "",
    status: "",
    no_link_aja: "",
    province: "",
    city: "",
    sub_district: "",
    postal_code: "",
    address: "",
    self_photo: "",
    ktp_photo: "",
    oauth: { fullname: "", email: "", phone: "" },
  });

  const [ids, setId] = useState<number>(0);
  const [status, setStatus] = useState("");
  const [name, setName] = useState("");
  const [note, setNote] = useState("");
  const [isOpen, setIsOpen] = useState(false);

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
    getMerchantDetail(searchParams.get("id"), setData);
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
        open={isOpen}
        handleClose={handleClose}
        status={status}
        name={name}
        note={note}
        onChange={(e: any) => setNote(e.target.value)}
        handleSubmit={() => Approvals(ids, status, note, setIsOpen, "merchant")}
      />
    </>
  );
};

export default MerchantInfo;
