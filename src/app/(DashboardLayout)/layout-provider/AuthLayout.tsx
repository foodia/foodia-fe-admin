"use client";
import { Box, Container, styled, useTheme } from "@mui/material";
import { green } from "@mui/material/colors";
import React, { useState } from "react";
import Login from "../components/auth/login";

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
    <MainWrapper className="mainwrapper">
      <Box
        sx={{
          backgroundColor: theme.palette.primary.main,
          color: "white",
          fontSize: "20px",
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100%",
        }}
      >
        <Login />
      </Box>
    </MainWrapper>
  );
}
