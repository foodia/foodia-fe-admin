import { Box, Stack, TextField, Typography } from "@mui/material";
import BaseCard from "../shared/DashboardCard";

type ChildProps = {
  data: {
    id: number;
    name: string;
    price: string;
    status: string;
    qty: string;
    note: string;
    description: string;
    images: [{ id: number; image_url: string }];
  };
};

const Info: React.FC<ChildProps> = ({ data }) => {
  return (
    <>
      <BaseCard title="Product Info" status={data.status}>
        <Stack spacing={3}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "start",
            }}
          >
            <Typography>Name : </Typography>
            <TextField
              fullWidth
              id="name-basic"
              variant="outlined"
              defaultValue={data.name}
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
            <Typography>Price : </Typography>
            <TextField
              fullWidth
              id="name-basic"
              variant="outlined"
              value={`Rp. ${data.price}`}
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
            <Typography>Quantity : </Typography>
            <TextField
              fullWidth
              id="name-basic"
              variant="outlined"
              defaultValue={data.qty}
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
            <Typography>Description : </Typography>
            <TextField
              fullWidth
              id="name-basic"
              variant="outlined"
              defaultValue={data.description}
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
            <Typography>Note : </Typography>
            <TextField
              fullWidth
              id="name-basic"
              variant="outlined"
              defaultValue={data.note}
              disabled
            />
          </Box>
        </Stack>
      </BaseCard>
    </>
  );
};

export default Info;
