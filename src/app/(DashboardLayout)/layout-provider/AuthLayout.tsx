"use client";
import { Box, Container, styled } from "@mui/material";
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
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const [isMobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  return (
    <MainWrapper className="mainwrapper">
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
