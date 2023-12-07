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
        `https://api.foodia-dev.nuncorp.id/api/v1/merchant/fetch/${searchParams.get(
          "id"
        )}`,
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
              `https://api.foodia-dev.nuncorp.id/api/v1/merchant/approval/${id}`,
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
              `https://api.foodia-dev.nuncorp.id/api/v1/merchant/approval/${id}`,
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
            color="green"
          >
            <IconCircleCheck /> Approved
          </Typography>
        ) : data.status === "rejected" ? (
          <Typography
            display="flex"
            alignItems="center"
            justifyContent="center"
            color="red"
          >
            <IconBan /> Rejected
          </Typography>
        ) : (
          <Typography
            display="flex"
            alignItems="center"
            justifyContent="center"
            color="orange"
          >
            <IconClock /> Waiting
          </Typography>
        )}
        <Stack spacing={1} direction="row">
          <Button
            variant="contained"
            size="small"
            color="success"
            disabled={data.status === "approved"}
            onClick={() => handleOpen(data.id, "approved", data.oauth.fullname)}
          >
            <IconCircleCheck size={18} /> Approve
          </Button>
          <Button
            variant="contained"
            size="small"
            color="error"
            disabled={data.status === "rejected"}
            onClick={() => handleOpen(data.id, "rejected", data.oauth.fullname)}
          >
            <IconBan size={16} /> Reject
          </Button>
        </Stack>
      </Box>

      <Modal
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        open={isOpen}
        onClose={handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Box
          sx={{
            display: "flex",
            borderRadius: "10px",
            flexDirection: "column",
            alignItems: "center",
            width: "auto",
            backgroundColor: "white",
            padding: "35px",
            gap: "30px",
          }}
        >
          <Typography
            style={{ display: "flex", flexDirection: "row", gap: "5px" }}
          >
            {status === "approved" ? "Approve" : "Reject"}{" "}
            <Typography style={{ fontWeight: "bold" }}>{name}</Typography> ?
          </Typography>
          {status === "approved" ? (
            ""
          ) : (
            <TextField
              onChange={(e) => setNote(e.target.value)}
              label="Note :"
              variant="outlined"
              type="text"
              helperText="*This Field Must be Filled"
            />
          )}
          <Box sx={{ display: "flex", flexDirection: "row" }}>
            <Button onClick={() => Approvals(ids, status)}>
              {status === "approved" ? "Approve" : "Reject"}{" "}
            </Button>
            <Button onClick={handleClose}>Cancel</Button>
          </Box>
        </Box>
      </Modal>
    </>
  );
};

export default MerchantInfo;
