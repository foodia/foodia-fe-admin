import { Box, Stack, TextField, Typography } from "@mui/material";
import BaseCard from "../shared/DashboardCard";
import LeafLet from "../shared/LeafLet";

interface ChildProps {
  data: {
    id: number;
    event_name: string;
    event_type: string;
    event_date: string;
    event_time: string;
    description: string;
    donation_target: string;
    province: string;
    city: string;
    status: string;
    food_required: number;
    food_total: number;
    detonator: { oauth: { fullname: string } };
  };
}

const Info: React.FC<ChildProps> = ({ data }) => {
  return (
    <>
      <BaseCard title="Campaign Info" status={data.status}>
        <Stack spacing={3}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "start",
            }}
          >
            <Typography>Detonator : </Typography>
            <TextField
              fullWidth
              id="name-basic"
              variant="outlined"
              defaultValue={data.detonator?.oauth?.fullname}
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
            <Typography>Name : </Typography>
            <TextField
              fullWidth
              id="name-basic"
              variant="outlined"
              defaultValue={data.event_name}
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
            <Typography>Type : </Typography>
            <TextField
              fullWidth
              id="name-basic"
              variant="outlined"
              defaultValue={data.event_type}
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
            <Typography>Date & Time : </Typography>
            <TextField
              fullWidth
              id="name-basic"
              variant="outlined"
              defaultValue={data.event_date + "  " + data.event_time}
              disabled
            />
          </Box>
          {/* <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "start",
            }}
          >
            <Typography>Time : </Typography>
            <TextField
              fullWidth
              id="name-basic"
              variant="outlined"
              defaultValue={data.event_time}
              disabled
            />
          </Box> */}
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
              multiline
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
            <Typography>Donation Target : </Typography>
            <TextField
              fullWidth
              id="name-basic"
              variant="outlined"
              value={
                "Rp." +
                data.donation_target.replace(/\B(?=(\d{3})+(?!\d))/g, ".")
              }
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
            <Typography>Food Required : </Typography>
            <TextField
              fullWidth
              id="name-basic"
              variant="outlined"
              value={data.food_required}
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
            <Typography>Food Total : </Typography>
            <TextField
              fullWidth
              id="name-basic"
              variant="outlined"
              value={data.food_total}
              disabled
            />
          </Box>
        </Stack>
      </BaseCard>
    </>
  );
};

export default Info;
