"use client";
import Info from "@/app/(DashboardLayout)/components/campaign/Info";
import Maps from "@/app/(DashboardLayout)/components/campaign/Maps";
import Attachment from "@/app/(DashboardLayout)/components/campaign/Attachment";
import LeafLet from "@/app/(DashboardLayout)/components/shared/LeafLet";
import ModalPopup from "@/app/(DashboardLayout)/components/shared/ModalPopup";
import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import { IconBan, IconCircleCheck } from "@tabler/icons-react";
import axios from "axios";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

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
  latitude: string;
  longitude: string;
  image_url: string;
  detonator: { oauth: { fullname: string; email: string } };
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
    latitude: "",
    longitude: "",
    image_url: "",
    detonator: { oauth: { fullname: "", email: "" } },
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
    getCampaignDetail();
  }, []);

  const getCampaignDetail = () => {
    axios
      .get(
        process.env.NEXT_PUBLIC_BASE +
          `/campaign/fetch/${searchParams.get("id")}`,
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
              process.env.NEXT_PUBLIC_BASE + `/campaign/approval/${id}`,
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
              getCampaignDetail();
              setIsOpen(false);
            })
            .catch((error) => {})
        : note === ""
        ? console.log("Note Empty")
        : axios
            .put(
              process.env.NEXT_PUBLIC_BASE + `/campaign/approval/${id}`,
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
              getCampaignDetail();
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
            <Stack
              display="flex"
              justifyContent="center"
              spacing={1}
              direction="row"
            >
              <Button
                variant="contained"
                size="large"
                color="success"
                disabled={status === "approved"}
                onClick={() =>
                  handleOpen(
                    data.id,
                    "approved",
                    data.detonator?.oauth?.fullname
                  )
                }
              >
                <IconCircleCheck size={18} /> Approve
              </Button>
              <Button
                variant="contained"
                size="large"
                color="error"
                disabled={status === "rejected"}
                onClick={() =>
                  handleOpen(
                    data.id,
                    "rejected",
                    data.detonator?.oauth?.fullname
                  )
                }
              >
                <IconBan size={16} /> Reject
              </Button>
            </Stack>
          </Box>
        </Grid>
        <Grid
          item
          xs={6}
          lg={6}
          sx={{ display: "flex", flexDirection: "column", gap: "20px" }}
        >
          <Attachment data={data} />
          <Maps data={data} />
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
