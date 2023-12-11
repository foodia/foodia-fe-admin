"use client";
import { Grid, Paper } from "@mui/material";
import CampaignData from "@/app/(DashboardLayout)/components/product/List";
import PageContainer from "../../components/container/PageContainer";

const CampaignManagement = () => {
  return (
    <PageContainer
      title="Product Management"
      description="this is product management"
    >
      <Grid container spacing={0}>
        <Grid item xs={12} lg={12}>
          <CampaignData />
        </Grid>
      </Grid>
    </PageContainer>
  );
};

export default CampaignManagement;
