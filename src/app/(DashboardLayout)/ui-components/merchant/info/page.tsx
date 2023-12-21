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
import List from "@/app/(DashboardLayout)/components/merchant/product/List";
import ModalPopup from "@/app/(DashboardLayout)/components/shared/ModalPopup";

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
    getMerchantDetail();
  }, []);

  const getMerchantDetail = () => {
    axios
      .get(
        process.env.NEXT_PUBLIC_BASE +
          `/merchant/fetch/${searchParams.get("id")}`,
        {
          headers: { authorization: `Bearer ${localStorage.getItem("TOKEN")}` },
        }
      )
      .then((res) => {
        setData(res.data.body);
      })
      .catch((error) => {});
  };

  const Approvals = (id: number, status: string) => {
    {
      status === "approved"
        ? axios
            .put(
              process.env.NEXT_PUBLIC_BASE + `/merchant/approval/${id}`,
              {
                status,
                note: "approved",
              },
              {
                headers: {
                  authorization: `Bearer ${localStorage.getItem("TOKEN")}`,
                },
              }
            )
            .then((res) => {
              getMerchantDetail();
              setIsOpen(false);
            })
            .catch((error) => {})
        : note === ""
        ? console.log("Note Empty")
        : axios
            .put(
              process.env.NEXT_PUBLIC_BASE + `/merchant/approval/${id}`,
              {
                status,
                note,
              },
              {
                headers: {
                  authorization: `Bearer ${localStorage.getItem("TOKEN")}`,
                },
              }
            )
            .then((res) => {
              getMerchantDetail();
              setIsOpen(false);
            })
            .catch((error) => {});
    }
  };

  return (
    <>
      <Grid container spacing={3}>
        <Grid item xs={6} lg={6}>
          <Info data={data} />
          <Box
            marginTop="30px"
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
        </Grid>
        <Grid item xs={6} lg={6}>
          <Attachment data={data} />
        </Grid>
      </Grid>
      <ModalPopup
        open={isOpen}
        handleClose={handleClose}
        status={status}
        name={name}
        note={note}
        onChange={(e: any) => setNote(e.target.value)}
        handleSubmit={() => Approvals(ids, status)}
      />
    </>
  );
};

export default MerchantInfo;
