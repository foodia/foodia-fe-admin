"use client";
import { Grid, Paper } from "@mui/material";
import DetonatorData from "@/app/(DashboardLayout)/components/detonator/List";

const DetonatorManagement = () => {
  return (
    <Grid container spacing={0}>
      <Grid item xs={12} lg={12}>
        <DetonatorData />
      </Grid>
    </Grid>
  );
};

export default DetonatorManagement;
