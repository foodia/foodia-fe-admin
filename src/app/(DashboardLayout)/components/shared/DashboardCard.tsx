import React from "react";
import { Card, CardContent, Typography, Stack, Box } from "@mui/material";
import { IconBan, IconCircleCheck, IconClock } from "@tabler/icons-react";

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
              mb={3}
            >
              <Box>
                {title ? (
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                    }}
                  >
                    <Typography variant="h3">{title}</Typography>
                    {status ? (
                      <Typography
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        borderRadius="15px"
                        padding="5px 15px"
                        color="white"
                        sx={
                          status === "approved"
                            ? { backgroundColor: "success.main" }
                            : status === "rejected"
                            ? { backgroundColor: "error.main" }
                            : { backgroundColor: "warning.main" }
                        }
                      >
                        {status === "approved" ? (
                          <>
                            Approved <IconCircleCheck />
                          </>
                        ) : status === "rejected" ? (
                          <>
                            Rejected <IconBan />
                          </>
                        ) : (
                          <>
                            Waiting <IconClock />
                          </>
                        )}
                      </Typography>
                    ) : (
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

          {children}
        </CardContent>
      )}

      {middlecontent}
      {footer}
    </Card>
  );
};

export default DashboardCard;
