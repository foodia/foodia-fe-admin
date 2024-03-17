import {
  Box,
  Button,
  InputAdornment,
  MenuItem,
  Modal,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import ImageHandler from "./ImageHandler";

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
        <Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "5px",
              marginBottom: "15px",
            }}
          >
            <Typography>Campaign Name : {campaign_name}</Typography>
            <Typography>
              Required Donation :{" "}
              {new Intl.NumberFormat("id-ID", {
                style: "currency",
                currency: "IDR",
                minimumFractionDigits: 0,
              }).format(required_donation)}
            </Typography>
            <Typography>
              Collected Donation :{" "}
              {new Intl.NumberFormat("id-ID", {
                style: "currency",
                currency: "IDR",
                minimumFractionDigits: 0,
              }).format(collected_donation)}
            </Typography>
          </Box>
          <Box sx={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            {/* Wallet Type */}
            <Box sx={{ display: "flex", flexDirection: "column", gap: "1px" }}>
              <Select
                variant="standard"
                size="small"
                disableUnderline
                // label="Choose Event Type"
                sx={{
                  ".MuiSelect-select": {
                    padding: "10px",
                    width: "100%",
                    paddingLeft: "20px",
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
                  Wallet Type
                </MenuItem>
                <MenuItem key={1} value="csr">
                  CSR
                </MenuItem>
                <MenuItem key={2} value="agnostic">
                  Agnostic
                </MenuItem>
              </Select>
              {valueWalletType === "default" && (
                <Typography
                  sx={{ color: "red", fontSize: "14px", marginLeft: "10px" }}
                >
                  *Choose wallet type
                </Typography>
              )}
            </Box>
            {/* Wallet Recources */}
            {valueWalletType !== "default" && (
              <Box
                sx={{ display: "flex", flexDirection: "column", gap: "1px" }}
              >
                <Select
                  variant="standard"
                  size="small"
                  disableUnderline
                  // label="Choose Event Type"
                  sx={{
                    ".MuiSelect-select": {
                      padding: "10px",
                      width: "100%",
                      paddingLeft: "20px",
                      background: "rgba(63, 182, 72, 0.10)",
                      borderRadius: "12px",
                      ":focus": {
                        borderRadius: "12px",
                        background: "rgba(63, 182, 72, 0.10)",
                      },
                    },
                  }}
                  value={selectedWallet}
                  onChange={onChangeSelectedWallet}
                >
                  <MenuItem disabled value="default">
                    Choose Wallet Recources
                  </MenuItem>
                  {walletList?.map((data) => (
                    <MenuItem key={data.id} value={data.id}>
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "row",
                          alignItems: "center",
                          gap: "10px",
                        }}
                      >
                        <Typography sx={{ fontSize: "16px" }}>Name:</Typography>
                        <Typography sx={{ fontSize: "12px", marginTop: "3px" }}>
                          {data.name},
                        </Typography>
                        <Typography sx={{ fontSize: "16px" }}>
                          Balance:
                        </Typography>
                        <Typography sx={{ fontSize: "12px", marginTop: "3px" }}>
                          {new Intl.NumberFormat("id-ID", {
                            style: "currency",
                            currency: "IDR",
                            minimumFractionDigits: 0,
                          }).format(data.balance)}
                        </Typography>
                      </Box>
                    </MenuItem>
                  ))}
                </Select>
                {selectedWallet === "default" && (
                  <Typography
                    sx={{ color: "red", fontSize: "14px", marginLeft: "10px" }}
                  >
                    *Choose wallet recources
                  </Typography>
                )}
              </Box>
            )}
            {/* Donation Amount */}
            {selectedWallet !== "default" && (
              <Box
                sx={{
                  width: "100%",
                }}
              >
                {/* {fieldsCsrWalletSelection.map((field, index) => ( */}
                <TextField
                  variant="standard"
                  size="small"
                  placeholder="Donation Amount"
                  value={valueDonationAmount}
                  type="text"
                  sx={{
                    ".MuiInput-input": {
                      padding: "10px",
                      paddingLeft: "20px",
                      background: "rgba(63, 182, 72, 0.10)",
                      borderRadius: "12px",
                      width: "100%",
                    },
                  }}
                  // label="Search By"
                  InputProps={{
                    disableUnderline: true,
                    startAdornment: (
                      <InputAdornment position="start">Rp.</InputAdornment>
                    ),
                  }}
                  onChange={onChangeAddDonationAmount}
                />
                {/* ))} */}
                {valueDonationAmount === "" && (
                  <Typography
                    sx={{ color: "red", fontSize: "14px", marginLeft: "1px" }}
                  >
                    *Input amount of donation
                  </Typography>
                )}
                {collected_donation +
                  parseInt(valueDonationAmount.replace(/\./g, ""), 10) >
                  required_donation && (
                  <Typography
                    sx={{
                      color: "red",
                      fontSize: "14px",
                      marginLeft: "1px",
                    }}
                  >
                    *Amount Cant Be More Than Required
                  </Typography>
                )}
              </Box>
            )}
          </Box>
        </Box>
        <Box sx={{ display: "flex", flexDirection: "row", gap: "10px" }}>
          <Button
            sx={
              valueWalletType === "default"
                ? { backgroundColor: "grey.100" }
                : { backgroundColor: "primary.light" }
            }
            disabled={
              collected_donation +
                parseInt(valueDonationAmount.replace(/\./g, ""), 10) >
                required_donation || valueDonationAmount === ""
            }
            onClick={handleAddDonation}
          >
            Add Donation
          </Button>
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

export const ModalPopupApprovals = ({
  open,
  handleClose,
  status,
  name,
  note,
  onChange,
  handleSubmit,
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
          <Button
            disabled={status === "rejected" && note === ""}
            onClick={handleSubmit}
          >
            {status === "approved" ? "Approve" : "Reject"}{" "}
          </Button>
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
          <ImageHandler fit url={image_url} />
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
