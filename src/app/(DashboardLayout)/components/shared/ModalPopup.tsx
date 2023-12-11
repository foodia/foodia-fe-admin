import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Stack,
  Box,
  Modal,
  TextField,
  Button,
} from "@mui/material";

type Props = {
  open: any;
  handleClose: any;
  status: string;
  name: string;
  note: string;
  onChange: any;
  handleSubmit: any;
};

const ModalPopup = ({
  open,
  handleClose,
  status,
  name,
  note,
  onChange,
  handleSubmit,
}: Props) => {
  return (
    <Modal
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      open={open}
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
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <TextField
              multiline
              onChange={onChange}
              label="Note :"
              variant="outlined"
              type="text"
            />
            {note === "" && (
              <Typography sx={{ color: "red", fontSize: "14px" }}>
                *This field must be filled
              </Typography>
            )}
          </Box>
        )}
        <Box sx={{ display: "flex", flexDirection: "row" }}>
          <Button
            disabled={status === "rejected" && note === ""}
            onClick={handleSubmit}
          >
            {status === "approved" ? "Approve" : "Reject"}{" "}
          </Button>
          <Button onClick={handleClose}>Cancel</Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default ModalPopup;
