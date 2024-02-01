"use client";
import Attachment from "@/app/(DashboardLayout)/components/product/Attachment";
import Info from "@/app/(DashboardLayout)/components/product/Info";
import {
  Box,
  Button,
  Grid,
  Modal,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { IconBan, IconCircleCheck, IconClock } from "@tabler/icons-react";
import axios from "axios";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import ModalPopup from "@/app/(DashboardLayout)/components/shared/ModalPopup";
import { getProductDetail } from "@/app/(DashboardLayout)/components/api/Product";
import { Approvals } from "@/app/(DashboardLayout)/components/api/Approvals";
import DashboardCard from "@/app/(DashboardLayout)/components/shared/DashboardCard";

type Props = {
  id: number;
  name: string;
  price: string;
  status: string;
  qty: string;
  note: string;
  description: string;
  images: [{ id: number; image_url: string }];
};

const ProductInfo = () => {
  const searchParams = useSearchParams();
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
    images: [{ id: 0, image_url: "" }],
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
    getProductDetail(searchParams.get("id"), setData);
  }, []);

  console.log(status);

  return (
    <>
      <DashboardCard title="Product Detail">
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
                onClick={() => handleOpen(data.id, "approved", data.name)}
                color="success"
              >
                <IconCircleCheck size={18} /> Approve
              </Button>
              <Button
                variant="contained"
                size="large"
                disabled={data.status === "rejected"}
                onClick={() => handleOpen(data.id, "rejected", data.name)}
                color="error"
              >
                <IconBan size={16} /> Reject
              </Button>
            </Stack>
          </Box>
        </>
      </DashboardCard>

      <ModalPopup
        open={isOpen}
        handleClose={handleClose}
        status={status}
        name={name}
        note={note}
        onChange={(e: any) => setNote(e.target.value)}
        handleSubmit={() =>
          Approvals(ids, status, note, setIsOpen, "merchant-product")
        }
      />
    </>
  );
};

export default ProductInfo;
