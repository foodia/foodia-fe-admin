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

const CampaignInfo = () => {
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
    getDetonatorDetail();
  }, []);

  const getDetonatorDetail = () => {
    axios
      .get(
        process.env.NEXT_PUBLIC_BASE +
          `/merchant-product/fetch/${searchParams.get("id")}`,
        {
          headers: { authorization: `Bearer ${localStorage.getItem("TOKEN")}` },
        }
      )
      .then((res) => {
        setData(res.data.body);
      })
      .catch((error) => {});
  };

  console.log(status);

  const Approvals = (id: number, status: string) => {
    {
      status === "approved"
        ? axios
            .put(
              process.env.NEXT_PUBLIC_BASE + `/merchant-product/approval/${id}`,
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
              getDetonatorDetail();
              setIsOpen(false);
            })
            .catch((error) => {})
        : note === ""
        ? console.log("Note Empty")
        : axios
            .put(
              process.env.NEXT_PUBLIC_BASE + `/merchant-product/approval/${id}`,
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
              getDetonatorDetail();
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

export default CampaignInfo;
