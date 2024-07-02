"use client";
import { Approvals } from "@/app/(DashboardLayout)/components/api/Approvals";
import {
  ApprovalsDisbursement,
  getDisbursementDetail,
} from "@/app/(DashboardLayout)/components/api/Disbursement";
import Info from "@/app/(DashboardLayout)/components/disbursement/Info";
// import Attachment from "@/app/(DashboardLayout)/components/disbursement/Attachment";
import { useAppContext } from "@/app/(DashboardLayout)/components/shared/Context";
import DashboardCard from "@/app/(DashboardLayout)/components/shared/DashboardCard";
import { ModalPopupApprovals } from "@/app/(DashboardLayout)/components/shared/ModalPopup";
import { Box, Button, Stack, Typography } from "@mui/material";
import { IconBan, IconCircleCheck } from "@tabler/icons-react";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

type Props = {
  id: number;
  recipient_name: any;
  bank: any;
  amount: any;
  admin_fee: any;
  rekening: any;
  merchant: {
    merchant_name: any;
    oauth: { fullname: string; email: string };
    wallet: {
      balance: any;
    };
  };
  payment_method: any;
  status: string;
  note: any;
};

const DisbursementInfo = () => {
  const searchParams = useSearchParams();
  const { isLoading, setIsLoading } = useAppContext();
  const [isOpen, setIsOpen] = useState(false);
  const [ids, setId] = useState<number>(0);
  const [status, setStatus] = useState("");
  const [name, setName] = useState("");
  const [note, setNote] = useState("");
  const [data, setData] = useState<Props>({
    id: 0,
    recipient_name: "",
    bank: "",
    amount: 0,
    admin_fee: 0,
    rekening: "",
    merchant: {
      merchant_name: "",
      oauth: { fullname: "", email: "" },
      wallet: { balance: "" },
    },
    payment_method: "",
    status: "",
    note: "",
  });

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
    getDisbursementDetail(searchParams.get("id"), setData, setIsLoading);
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
      href="/ui-components/pages/disbursement"
    >
      Disbursement List
    </Button>,
    <Typography fontSize="13px" key="3" color="#999" fontWeight={400}>
      Disbursement Detail
    </Typography>,
  ];

  return (
    <>
      <DashboardCard title="Disbursement Detail" breadcrumb={breadcrumbs}>
        <>
          <Info data={data} />
          {/* <Attachment data={data} /> */}
          <Box
            marginTop="20px"
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            gap="20px"
            color="white"
          >
            <Stack
              display="flex"
              justifyContent="center"
              spacing={1}
              direction="row"
            >
              <Button
                variant="contained"
                size="large"
                disabled={data.status === "approved"}
                onClick={() =>
                  handleOpen(data.id, "approved", data.recipient_name)
                }
                color="success"
              >
                <IconCircleCheck size={18} /> Approve
              </Button>
              <Button
                variant="contained"
                size="large"
                disabled={data.status === "rejected"}
                onClick={() =>
                  handleOpen(data.id, "rejected", data.recipient_name)
                }
                color="error"
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
        handleSubmit={() =>
          ApprovalsDisbursement(ids, status, note, setIsOpen, setIsLoading)
        }
      />
    </>
  );
};

export default DisbursementInfo;
