"use client";
import { Grid, Paper } from "@mui/material";
import DetonatorData from "@/app/(DashboardLayout)/components/detonator/campaign/List";
import PageContainer from "../../components/container/PageContainer";

const DetonatorManagement = () => {
  return (
    <PageContainer
      title="Campaign Management"
      description="this is campaign management"
    >
      <Grid container spacing={0}>
        <Grid item xs={12} lg={12}>
          <DetonatorData />
        </Grid>
      </Grid>
    </PageContainer>
  );
};

export default DetonatorManagement;
