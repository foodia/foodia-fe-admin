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
  valueDonationAmount?: any;
  onChangeAddDonationAmount?: any;
  fieldsCsrWalletSelection?: any;
  isLoading?: any;
  children?: React.ReactNode;
};

export const ModalPopupAddDonations = ({
  open,
  handleClose,
  campaign_name,
  required_donation,
  collected_donation,
  walletList,
  valueWalletType,
  onChangeWalletType,
  selectedWallet,
  onChangeSelectedWallet,
  handleAddDonation,
  valueDonationAmount,
  onChangeAddDonationAmount,
  fieldsCsrWalletSelection,
  children,
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
                Campaign Name
              </Typography>
            </Box>
            <Typography sx={{ fontWeight: "bold", color: "red" }}>
              Rp. 650.000
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
            <Typography sx={{ fontWeight: "bold" }}>Rp. 0</Typography>
          </Box>
        </Box>
        {valueWalletType !== "default" && (
          <>
            {children}
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <Button
                sx={{
                  backgroundColor: "lightgray",
                  width: "40%",
                  color: "gray",
                }}
              >
                Tambah Donasi
              </Button>
            </Box>
          </>
        )}
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
