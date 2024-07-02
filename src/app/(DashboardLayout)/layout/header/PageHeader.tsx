import {
  AppBar,
  Box,
  Breadcrumbs,
  Toolbar,
  Typography,
  styled,
} from "@mui/material";
import React from "react";

// components
import { KeyboardArrowRight } from "@mui/icons-material";
import moment from "moment";

interface ItemType {
  title?: any;
  breadcrumb?: any;
  currentBalance?: any;
  lastUpdate?: any;
}

const PageHeader: React.FC<ItemType> = ({
  title,
  breadcrumb,
  currentBalance,
  lastUpdate,
}) => {
  const AppBarStyled = styled(AppBar)(({ theme }) => ({
    background: "#FFF",
    boxShadow: "0px 0px 12px 0px rgba(0, 38, 96, 0.08)",
    justifyContent: "center",
    backdropFilter: "blur(4px)",
    marginBottom: "20px",
    zIndex: 0,
    [theme.breakpoints.up("lg")]: {
      minHeight: "70px",
    },
  }));
  const ToolbarStyled = styled(Toolbar)(({ theme }) => ({
    width: "100%",
    height: "100px",
    color: theme.palette.text.secondary,
  }));

  return (
    <AppBarStyled position="sticky" color="default">
      <ToolbarStyled>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            flexDirection: "row",
            justifyContent: "space-between",
            paddingX: "20px",
            width: "100%",
          }}
        >
          <Box>
            <Typography
              sx={{ color: "#333", fontSize: "28px", fontWeight: "700" }}
            >
              {title}
            </Typography>
            {breadcrumb ? (
              <Breadcrumbs
                separator={<KeyboardArrowRight fontSize="small" />}
                aria-label="breadcrumb"
              >
                {breadcrumb}
              </Breadcrumbs>
            ) : (
              ""
            )}
          </Box>
          {lastUpdate ? (
            <Typography sx={{ fontSize: "14px" }}>
              Last Updated {moment(lastUpdate).format("DD-MM-yyyy hh:mm:ss")}
            </Typography>
          ) : (
            ""
          )}
          {currentBalance ? (
            <>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "end",
                }}
              >
                <Typography
                  sx={{
                    fontSize: "12px",
                    fontWeight: 900,
                  }}
                >
                  Total Balance
                </Typography>
                <Typography
                  sx={{
                    fontSize: "32px",
                    color: "primary.main",
                    fontWeight: 800,
                  }}
                >
                  {new Intl.NumberFormat("id-ID", {
                    style: "currency",
                    currency: "IDR",
                    minimumFractionDigits: 0,
                  }).format(currentBalance)}
                </Typography>
              </Box>
            </>
          ) : (
            ""
          )}
        </Box>
      </ToolbarStyled>
    </AppBarStyled>
  );
};

// PageHeader.propTypes = {
//   sx: PropTypes.object,
// };

export default PageHeader;
