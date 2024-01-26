import React from "react";
import {
  Box,
  AppBar,
  Toolbar,
  styled,
  Stack,
  IconButton,
  Badge,
  Button,
  Typography,
  Breadcrumbs,
} from "@mui/material";
import PropTypes from "prop-types";

// components
import Profile from "./Profile";
import Search from "./Search";
import { IconMenu2 } from "@tabler/icons-react";
import { KeyboardArrowRight } from "@mui/icons-material";

interface ItemType {
  title?: any;
  breadcrumb?: any;
  currentBalance?: any;
}

const PageHeader: React.FC<ItemType> = ({
  title,
  breadcrumb,
  currentBalance,
}) => {
  // const lgUp = useMediaQuery((theme) => theme.breakpoints.up('lg'));
  // const lgDown = useMediaQuery((theme) => theme.breakpoints.down('lg'));

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
                  Current Balance
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
