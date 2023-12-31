import React, { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  Stack,
  Box,
  Stepper,
  Step,
  StepLabel,
  makeStyles,
  withStyles,
  styled,
  StepConnector,
  stepConnectorClasses,
  StepIconProps,
  StepIcon,
} from "@mui/material";
import {
  IconBan,
  IconCheck,
  IconChecklist,
  IconCircleCheck,
  IconClearAll,
  IconClock,
  IconCross,
  IconCrossFilled,
  IconError404,
  IconX,
} from "@tabler/icons-react";

type Props = {
  title?: string;
  subtitle?: string;
  action?: JSX.Element | any;
  footer?: JSX.Element;
  cardheading?: string | JSX.Element;
  headtitle?: string | JSX.Element;
  headsubtitle?: string | JSX.Element;
  children?: JSX.Element;
  middlecontent?: string | JSX.Element;
  status?: string;
};

interface CustomStepIconProps extends StepIconProps {
  stepNumber: number;
}

const DashboardCard = ({
  title,
  subtitle,
  children,
  action,
  footer,
  cardheading,
  headtitle,
  headsubtitle,
  middlecontent,
  status,
}: Props) => {
  const steps = ["Waiting", "Rejected", "Approved"];

  const activeStep = () => {
    if (status === "warning") {
      return 0;
    } else if (status === "rejected") {
      return 1;
    } else if (status === "approved") {
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
        borderRadius="15px"
        paddingX="50px"
        width="60px"
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

  return (
    <Card sx={{ padding: 0 }} elevation={9} variant={undefined}>
      {cardheading ? (
        <CardContent>
          <Typography variant="h3">{headtitle}</Typography>
          <Typography variant="subtitle2" color="textSecondary">
            {headsubtitle}
          </Typography>
        </CardContent>
      ) : (
        <CardContent sx={{ p: "30px" }}>
          {title ? (
            <Stack
              // direction="row"
              // spacing={2}
              // justifyContent="space-between"
              // alignItems={"center"}
              mb={1}
            >
              <Box>
                {title ? (
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <Typography variant="h3">{title}</Typography>
                    {status ? (
                      <Stepper
                        sx={{ padding: "15px" }}
                        activeStep={activeStep()}
                        alternativeLabel
                      >
                        {steps.map((label, index) => (
                          <Step key={label}>
                            <StepLabel
                              StepIconComponent={(props) => (
                                <CustomStepIcon
                                  stepNumber={index + 1}
                                  {...props}
                                />
                              )}
                            >
                              {/* {label} */}
                            </StepLabel>
                          </Step>
                        ))}
                      </Stepper>
                    ) : (
                      // <Typography
                      //   display="flex"
                      //   alignItems="center"
                      //   justifyContent="center"
                      //   borderRadius="15px"
                      //   padding="5px 15px"
                      //   color="white"
                      //   sx={
                      //     status === "approved"
                      //       ? { backgroundColor: "success.main" }
                      //       : status === "rejected"
                      //       ? { backgroundColor: "error.main" }
                      //       : { backgroundColor: "warning.main" }
                      //   }
                      // >
                      //   {status === "approved" ? (
                      //     <>
                      //       Approved <IconCircleCheck />
                      //     </>
                      //   ) : status === "rejected" ? (
                      //     <>
                      //       Rejected <IconBan />
                      //     </>
                      //   ) : (
                      //     <>
                      //       Waiting <IconClock />
                      //     </>
                      //   )}
                      // </Typography>
                      ""
                    )}
                  </Box>
                ) : (
                  ""
                )}

                {subtitle ? (
                  <Typography variant="subtitle2" color="textSecondary">
                    {subtitle}
                  </Typography>
                ) : (
                  ""
                )}
              </Box>
              {action}
            </Stack>
          ) : null}
          <hr />
          <br />
          {children}
        </CardContent>
      )}

      {middlecontent}
      {footer}
    </Card>
  );
};

export default DashboardCard;
