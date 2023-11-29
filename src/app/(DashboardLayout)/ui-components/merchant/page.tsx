'use client';
import { Grid, Paper } from "@mui/material";
import PageContainer from '@/app/(DashboardLayout)/components/container/PageContainer';
import MerchantData from "@/app/(DashboardLayout)/components/merchant/List";

const MerchantManagement = () => {
  return (
    <PageContainer title="Merchant Management" description="this is detonator management">
      <Grid container spacing={0}>
        <Grid item xs={12} lg={12}>
          <MerchantData />
        </Grid>
      </Grid>
    </PageContainer>
  );
};

export default MerchantManagement;