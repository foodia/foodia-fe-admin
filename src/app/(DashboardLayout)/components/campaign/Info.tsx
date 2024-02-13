import {
  Box,
  Stack,
  Step,
  StepIconProps,
  StepLabel,
  Stepper,
  TextField,
  Typography,
} from "@mui/material";
import BaseCard from "../shared/DashboardCard";
import LeafLet from "../shared/LeafLet";
import DetailCard from "../shared/DetailCard";
import { IconBan, IconCircleCheck, IconClock } from "@tabler/icons-react";
import { uniqueId } from "lodash";

interface ChildProps {
  data: {
    id: number;
    event_name: string;
    event_type: string;
    event_date: string;
    event_time: string;
    description: string;
    donation_target: any;
    province: string;
    city: string;
    status: string;
    food_required: number;
    food_total: number;
    detonator: { oauth: { fullname: string } };
  };
}

interface CustomStepIconProps extends StepIconProps {
  stepNumber: number;
}

export const Field = ({ value, label }: any) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        width: "100%",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          gap: "10px",
          width: "25%",
          color: "#999",
        }}
      >
        <Typography>{label}</Typography>
        <Typography>:</Typography>
      </Box>
      <Box sx={{ paddingX: "15px" }}>{value}</Box>
    </Box>
  );
};

const Info: React.FC<ChildProps> = ({ data }) => {
  const steps = ["Waiting", "Rejected", "Approved"];

  const activeStep = () => {
    if (data.status === "warning") {
      return 0;
    } else if (data.status === "rejected") {
      return 1;
    } else if (data.status === "approved") {
      return 2;
    }
  };

  const CustomStepIcon: React.FC<CustomStepIconProps> = ({
    active,
    stepNumber,
  }) => {
    // Customize each step's icon individually
    return (
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        paddingX="20px"
        color="white"
        zIndex={1}
      >
        {stepNumber === 1 ? (
          <Typography
            display="flex"
            flexDirection="row"
            sx={
              active
                ? {
                    borderRadius: "15px",
                    paddingX: "10px",
                    backgroundColor: "warning.main",
                  }
                : {
                    borderRadius: "15px",
                    paddingX: "10px",
                    backgroundColor: "grey",
                  }
            }
          >
            Waiting <IconClock />
          </Typography>
        ) : stepNumber === 2 ? (
          <Typography
            display="flex"
            flexDirection="row"
            sx={
              active
                ? {
                    borderRadius: "15px",
                    paddingX: "10px",
                    backgroundColor: "error.main",
                  }
                : {
                    borderRadius: "15px",
                    paddingX: "10px",
                    backgroundColor: "grey",
                  }
            }
          >
            Rejected <IconBan />
          </Typography>
        ) : (
          stepNumber === 3 && (
            <Typography
              display="flex"
              flexDirection="row"
              sx={
                active
                  ? {
                      borderRadius: "15px",
                      paddingX: "10px",
                      backgroundColor: "success.main",
                    }
                  : {
                      borderRadius: "15px",
                      paddingX: "10px",
                      backgroundColor: "grey",
                    }
              }
            >
              Approved <IconCircleCheck />
            </Typography>
          )
        )}
      </Box>
    );
  };

  const status = [
    <Stepper key={uniqueId()} activeStep={activeStep()} alternativeLabel>
      {steps.map((label, index) => (
        <Step key={index}>
          <StepLabel
            key={index}
            StepIconComponent={(props) => (
              <CustomStepIcon stepNumber={index + 1} {...props} />
            )}
          >
            {/* {label} */}
          </StepLabel>
        </Step>
      ))}
    </Stepper>,
  ];

  return (
    <>
      <DetailCard title="Campaign Information">
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "start",
            gap: "10px",
            width: "100%",
          }}
        >
          <Field label="Event Name" value={data.event_name} />
          <Field
            label="Event Type"
            value={data.event_type === "one_time" ? "One Time" : "Regular"}
          />
          <Field
            label="Date & Time"
            value={data.event_date + "  " + data.event_time}
          />
          <Field label="Food Required" value={data.food_required} />
          <Field label="Food Total" value={data.food_total} />
          <Field
            label="Donation Target"
            value={new Intl.NumberFormat("id-ID", {
              style: "currency",
              currency: "IDR",
              minimumFractionDigits: 0,
            }).format(data.donation_target)}
          />
          <Field label="Description" value={data.description} />
          <Box sx={{ paddingY: "20px" }}>{status}</Box>
        </Box>
      </DetailCard>
    </>
  );
};

export default Info;
