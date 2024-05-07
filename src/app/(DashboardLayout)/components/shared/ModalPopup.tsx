import {
  Box,
  Button,
  CircularProgress,
  IconButton,
  InputAdornment,
  MenuItem,
  Modal,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import ImageHandler from "./ImageHandler";
import { useAppContext } from "./Context";
import { IconX } from "@tabler/icons-react";

type Props = {
  open?: any;
  handleClose?: any;
  walletList?: {
    id?: any;
    type?: any;
    name?: any;
    balance?: any;
  }[];
  valueWalletType?: any;
  onChangeWalletType?: any;
  image_url?: any;
  status?: any;
  name?: any;
  note?: any;
  onChange?: any;
  handleSubmit?: any;
  valueEventTypeSelect?: any;
  onChangeEventType?: any;
  disableApprove?: any;
  campaign_name?: any;
  required_donation?: any;
  collected_donation?: any;
  selectedWallet?: any;
  onChangeSelectedWallet?: any;
  handleAddDonation?: any;
  totalValueDonationAmount?: any;
  valueDonationAmount?: any;
  onChangeAddDonationAmount?: any;
  fieldsCsrWalletSelection?: any;
  isLoading?: any;
  theresInputError?: any;
  children?: React.ReactNode;
};

export const ModalPopupAddDonations = ({
  open,
  handleClose,
  campaign_name,
  required_donation,
  collected_donation,
  valueWalletType,
  onChangeWalletType,
  valueDonationAmount,
  totalValueDonationAmount,
  children,
  theresInputError,
}: Props) => {
  return (
    <Modal
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        overflow: "auto",
      }}
      open={open}
      // onClose={handleClose}
      aria-labelledby="child-modal-title"
      aria-describedby="child-modal-description"
    >
      <Box
        sx={{
          display: "flex",
          borderRadius: "10px",
          flexDirection: "column",
          width: "900px",
          backgroundColor: "white",
          padding: "20px",
          gap: "30px",
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "end",
            }}
          >
            <IconButton onClick={handleClose}>
              <IconX />
            </IconButton>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            {/* Wallet Type */}
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                gap: "10px",
                alignItems: "center",
                justifyContent: "left",
                width: "auto",
              }}
            >
              <Typography sx={{ fontWeight: "bold", fontSize: "22px" }}>
                {campaign_name}
              </Typography>
            </Box>
            <Typography
              sx={{
                fontWeight: "bold",
                color: "red",
                display: "flex",
                flexDirection: "column",
                justifyContent: "right",
                alignItems: "end",
              }}
            >
              <Typography
                sx={{
                  fontWeight: "medium",
                  color: "black",
                }}
              >
                Jumlah Kurang Dana
              </Typography>
              {new Intl.NumberFormat("id-ID", {
                style: "currency",
                currency: "IDR",
                minimumFractionDigits: 0,
              }).format(required_donation - collected_donation)}
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            {/* Wallet Type */}
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                gap: "10px",
                alignItems: "center",
                justifyContent: "left",
                width: "auto",
              }}
            >
              <Typography sx={{ fontWeight: "medium" }}>
                Choose Wallet
              </Typography>
              <Select
                disabled={theresInputError}
                variant="standard"
                size="small"
                disableUnderline
                // label="Choose Event Type"
                sx={{
                  ".MuiSelect-select": {
                    color: `${
                      valueWalletType === "default" ? "gray" : "black"
                    }`,
                    padding: "10px",
                    width: "200px",
                    background: "rgba(63, 182, 72, 0.10)",
                    borderRadius: "12px",
                    ":focus": {
                      borderRadius: "12px",
                      background: "rgba(63, 182, 72, 0.10)",
                    },
                  },
                }}
                value={valueWalletType}
                onChange={onChangeWalletType}
              >
                <MenuItem key={0} disabled value="default">
                  Select One
                </MenuItem>
                <MenuItem key={1} value="csr">
                  CSR
                </MenuItem>
                <MenuItem key={2} value="agnostic">
                  Agnostic
                </MenuItem>
              </Select>
            </Box>
            <Box sx={{ display: "flex", flexDirection: "row", gap: "35px" }}>
              {valueWalletType !== "default" && (
                <Typography
                  sx={{
                    fontWeight: "bold",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "right",
                    alignItems: "end",
                  }}
                >
                  <Typography
                    sx={{
                      textTransform: "capitalize",
                      fontWeight: "medium",
                      color: "black",
                    }}
                  >
                    Tambahan Dana {valueWalletType}
                  </Typography>
                  {!valueDonationAmount
                    ? new Intl.NumberFormat("id-ID", {
                        style: "currency",
                        currency: "IDR",
                        minimumFractionDigits: 0,
                      }).format(0)
                    : new Intl.NumberFormat("id-ID", {
                        style: "currency",
                        currency: "IDR",
                        minimumFractionDigits: 0,
                      }).format(valueDonationAmount)}
                </Typography>
              )}
              <Typography
                sx={{
                  fontWeight: "bold",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "right",
                  alignItems: "end",
                  color: `${
                    totalValueDonationAmount >
                    required_donation - collected_donation
                      ? "red"
                      : "black"
                  }`,
                }}
              >
                <Typography
                  sx={{
                    fontWeight: "medium",
                  }}
                >
                  Total Tambahan Dana
                </Typography>
                {!totalValueDonationAmount
                  ? new Intl.NumberFormat("id-ID", {
                      style: "currency",
                      currency: "IDR",
                      minimumFractionDigits: 0,
                    }).format(0)
                  : new Intl.NumberFormat("id-ID", {
                      style: "currency",
                      currency: "IDR",
                      minimumFractionDigits: 0,
                    }).format(totalValueDonationAmount)}
              </Typography>
            </Box>
          </Box>
        </Box>
        {valueWalletType !== "default" && <>{children}</>}
      </Box>
    </Modal>
  );
};

export const ModalPopupApprovals = ({
  open,
  handleClose,
  status,
  name,
  note,
  onChange,
  handleSubmit,
  isLoading,
}: // valueEventTypeSelect,
// onChangeEventType,
// disableApprove,
Props) => {
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
        <Box sx={{ display: "flex", flexDirection: "row", gap: "10px" }}>
          <Box
            sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}
          >
            {isLoading && <CircularProgress size={20} />}
            <Button
              disabled={status === "rejected" && note === ""}
              onClick={handleSubmit}
            >
              {status === "approved" ? "Approve" : "Reject"}{" "}
            </Button>
          </Box>
          <Button
            sx={{ backgroundColor: "primary.light" }}
            onClick={handleClose}
          >
            Cancel
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export const ModalPopupFilesDetail = ({
  open,
  handleClose,
  image_url,
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
          width: "500px",
          backgroundColor: "transparent",
          paddingBottom: "20px",
          // padding: "35px",
          gap: "10px",
        }}
      >
        <Box sx={{}}>
          <ImageHandler fit src={image_url} />
        </Box>
        <Button
          sx={{ fontWeight: "bold", color: "white" }}
          onClick={handleClose}
        >
          Close
        </Button>
      </Box>
    </Modal>
  );
};
