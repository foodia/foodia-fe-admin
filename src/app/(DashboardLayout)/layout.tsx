"use client";
import { styled, Container, Box } from "@mui/material";
import React, { useState, useEffect } from "react";
import Header from "@/app/(DashboardLayout)/layout/header/Header";
import Sidebar from "@/app/(DashboardLayout)/layout/sidebar/Sidebar";
import Footer from "./layout/footer/page";
import DashboardLayout from "./layout-provider/DashboardLayout";
import AuthLayout from "./layout-provider/AuthLayout";
import { usePathname, useRouter } from "next/navigation";

const MainWrapper = styled("div")(() => ({
  display: "flex",
  minHeight: "100vh",
  width: "100%",
}));

interface Props {
  children: React.ReactNode;
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const [isMobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  const pathname = usePathname();

  return (
    <MainWrapper className="mainwrapper">
      {pathname.includes("auth") ? (
        <AuthLayout children={children} />
      ) : (
        <DashboardLayout children={children} />
      )}
    </MainWrapper>
  );
}
