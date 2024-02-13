"use client";
import { baselightTheme } from "@/utils/theme/DefaultColors";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { ProgressLoader } from "nextjs-progressloader";
import AppProvider from "./(DashboardLayout)/components/shared/Context";
import "@/app/global.css";
import { useState } from "react";
import NextTopLoader from "nextjs-toploader";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <title>Foodia Admin</title>
      <body>
        <ThemeProvider theme={baselightTheme}>
          <AppProvider>
            <NextTopLoader />
            {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
            <CssBaseline />
            {children}
          </AppProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
