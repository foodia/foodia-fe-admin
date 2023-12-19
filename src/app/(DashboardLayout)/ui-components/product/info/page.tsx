"use client";
import Attachment from "@/app/(DashboardLayout)/components/detonator/Attachment";
import Info from "@/app/(DashboardLayout)/components/campaign/Info";
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
  event_name: string;
  event_date: string;
  event_time: string;
  description: string;
  donation_target: string;
  province: string;
  city: string;
  status: string;
  detonator: { oauth: { fullname: string } };
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
    event_name: "",
    event_date: "",
    event_time: "",
    description: "",
    donation_target: "",
    province: "",
    city: "",
    status: "",
    detonator: { oauth: { fullname: "" } },
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
          `/detonator/fetch/${searchParams.get("id")}`,
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
              process.env.NEXT_PUBLIC_BASE + `/detonator/approval/${id}`,
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
              process.env.NEXT_PUBLIC_BASE + `/detonator/approval/${id}`,
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
        </Grid>
        <Grid item xs={6} lg={6}>
          <Attachment />
        </Grid>
      </Grid>
      <Box
        marginTop="40px"
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        gap="10px"
      >
        {data.status === "approved" ? (
          <Typography
            display="flex"
            alignItems="center"
            justifyContent="center"
            color="success.main"
          >
            <IconCircleCheck /> Approved
          </Typography>
        ) : data.status === "rejected" ? (
          <Typography
            display="flex"
            alignItems="center"
            justifyContent="center"
            color="error.main"
          >
            <IconBan /> Rejected
          </Typography>
        ) : (
          data.status === "waiting" && (
            <Typography
              display="flex"
              alignItems="center"
              justifyContent="center"
              color="warning.main"
            >
              <IconClock /> Waiting
            </Typography>
          )
        )}
        <Stack
          display="flex"
          justifyContent="center"
          spacing={1}
          direction="row"
        >
          <Button
            variant="contained"
            size="small"
            color="success"
            disabled
            onClick={() =>
              handleOpen(data.id, "approved", data.detonator?.oauth?.fullname)
            }
          >
            <IconCircleCheck size={18} /> Approve
          </Button>
          <Button
            variant="contained"
            size="small"
            color="error"
            disabled
            onClick={() =>
              handleOpen(data.id, "rejected", data.detonator?.oauth?.fullname)
            }
          >
            <IconBan size={16} /> Reject
          </Button>
        </Stack>
      </Box>

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
