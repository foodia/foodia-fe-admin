"use client";
import React from "react";
import { Box, Typography } from "@mui/material";
import Link from "next/link";
const Footer = () => {
  return (
    <Box sx={{ pt: 2, textAlign: "center" }}>
      <Typography>
        © 2023 All rights reserved by <Link href="">Foodia</Link>{" "}
      </Typography>
    </Box>
  );
};

export default Footer;
