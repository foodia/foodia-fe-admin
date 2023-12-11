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
    <BaseCard title="Merchant Info">
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
          <Typography>Number Link Aja : </Typography>
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
          <Typography>Provinsi : </Typography>
          <TextField
            fullWidth
            id="name-basic"
            variant="outlined"
            defaultValue={data.province}
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
          <Typography>Kota : </Typography>
          <TextField
            fullWidth
            id="name-basic"
            variant="outlined"
            defaultValue={data.city}
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
          <Typography>Kecamatan : </Typography>
          <TextField
            fullWidth
            id="name-basic"
            variant="outlined"
            defaultValue={data.sub_district}
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
          <Typography>Kode Pos : </Typography>
          <TextField
            fullWidth
            id="name-basic"
            variant="outlined"
            defaultValue={data.postal_code}
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
          <Typography>Alamat Lengkap : </Typography>
          <TextField
            fullWidth
            id="name-basic"
            variant="outlined"
            defaultValue={data.address}
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
      </Stack>
    </BaseCard>
  );
};

export default Info;
