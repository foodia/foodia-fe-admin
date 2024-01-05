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
  event_type: string;
  event_time: string;
  description: string;
  donation_target: string;
  status: string;
  order_status: string;
  image_url: string;
  food_required: number;
  food_total: number;
  latitude: any;
  longitude: any;
  address: string;
  sub_district: string;
  city: string;
  province: string;
  postal_code: string;
  detonator: {
    id: number;
    status: string;
    self_photo: string;
    oauth: { fullname: string; email: string; phone: string };
  };
  orders: [
    {
      id: number;
      order_status: string;
      qty: string;
      merchant: { oauth: { fullname: string } };
      merchant_product: {
        id: number;
        name: string;
        price: string;
        images: [{ image_url: string }];
      };
    }
  ];
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
    event_type: "",
    event_time: "",
    description: "",
    donation_target: "",
    status: "",
    order_status: "",
    image_url: "",
    food_required: 0,
    food_total: 0,
    latitude: "",
    longitude: "",
    address: "",
    sub_district: "",
    city: "",
    province: "",
    postal_code: "",
    detonator: {
      id: 0,
      status: "",
      self_photo: "",
      oauth: { fullname: "", email: "", phone: "" },
    },
    orders: [
      {
        id: 0,
        order_status: "",
        qty: "",
        merchant: { oauth: { fullname: "" } },
        merchant_product: {
          id: 0,
          name: "",
          price: "",
          images: [{ image_url: "" }],
        },
      },
    ],
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
              // getCampaignDetail();
              location.reload();
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
              // getCampaignDetail();
              location.reload();
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
                onClick={() => handleOpen(data.id, "approved", data.event_name)}
                color="success"
              >
                <IconCircleCheck size={18} /> Approve
              </Button>
              <Button
                variant="contained"
                size="large"
                disabled={data.status === "rejected"}
                onClick={() => handleOpen(data.id, "rejected", data.event_name)}
                color="error"
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
