"use client";
import { Box, Container, styled, useTheme } from "@mui/material";
import { green } from "@mui/material/colors";
import React, { useState } from "react";

const MainWrapper = styled("div")(() => ({
  display: "flex",
  width: "100%",
  alignItems: "center",
}));

interface Props {
  children: React.ReactNode;
}

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const theme = useTheme();
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const [isMobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  return (
    <MainWrapper
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "180px",
      }}
      className="mainwrapper"
    >
      <Box
        sx={{
          backgroundColor: theme.palette.primary.main,
          color: "white",
          fontSize: "20px",
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "40px",
        }}
      >
        Foodia Admin
      </Box>
      <Container style={{ width: "100%" }}>
        {/* ------------------------------------------- */}
        {/* Page Route */}
        {/* ------------------------------------------- */}
        <Box>{children}</Box>
        {/* ------------------------------------------- */}
        {/* End Page */}
        {/* ------------------------------------------- */}

        {/* ------------------------------------------- */}
        {/* Footer */}
        {/* ------------------------------------------- */}
      </Container>
    </MainWrapper>
  );
}
