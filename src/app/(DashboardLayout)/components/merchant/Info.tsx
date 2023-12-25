import { Box, Stack, TextField, Typography } from "@mui/material";
import BaseCard from "../shared/DashboardCard";

interface ChildProps {
  data: {
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
}

const Info: React.FC<ChildProps> = ({ data }) => {
  return (
    <BaseCard title="Merchant Info" status={data.status}>
      <Stack spacing={3}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "start",
          }}
        >
          <Typography>Fullname : </Typography>
          <TextField
            fullWidth
            id="name-basic"
            variant="outlined"
            defaultValue={data.oauth.fullname}
            disabled
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "start",
          }}
        >
          <Typography>Nomor KTP : </Typography>
          <TextField
            fullWidth
            id="name-basic"
            variant="outlined"
            defaultValue={data.ktp_number}
            disabled
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "start",
          }}
        >
          <Typography>Phone Number : </Typography>
          <TextField
            fullWidth
            id="name-basic"
            variant="outlined"
            defaultValue={data.oauth.phone}
            disabled
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "start",
          }}
        >
          <Typography>Link Aja Number : </Typography>
          <TextField
            fullWidth
            id="name-basic"
            variant="outlined"
            defaultValue={data.no_link_aja}
            disabled
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "start",
          }}
        >
          <Typography>Email : </Typography>
          <TextField
            fullWidth
            id="name-basic"
            variant="outlined"
            defaultValue={data.oauth.email}
            disabled
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "start",
          }}
        >
          <Typography>Address : </Typography>
          <TextField
            fullWidth
            id="name-basic"
            variant="outlined"
            value={`${data.address}, ${data.sub_district}, ${data.city}, ${data.province}, ${data.postal_code}`}
            disabled
          />
        </Box>
      </Stack>
    </BaseCard>
  );
};

export default Info;
