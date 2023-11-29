'use client';
import {
    Grid,
} from '@mui/material';
import Info from "@/app/(DashboardLayout)/components/merchant/Info";
import Attachment from '@/app/(DashboardLayout)/components/merchant/Attachment';

const MerchantInfo = () => {
    return (
        <Grid container spacing={3}>
            <Grid item xs={6} lg={6}>
               <Info />
            </Grid>
            <Grid item xs={6} lg={6}>
               <Attachment />
            </Grid>
        </Grid>
    );
};

export default MerchantInfo;