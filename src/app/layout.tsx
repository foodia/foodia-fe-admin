"use client";
import { baselightTheme } from "@/utils/theme/DefaultColors";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { ProgressLoader } from "nextjs-progressloader";
import AppProvider from "./(DashboardLayout)/components/shared/Context";
import "@/app/global.css";

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
            {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
            <ProgressLoader />
            <CssBaseline />
            {children}
          </AppProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
