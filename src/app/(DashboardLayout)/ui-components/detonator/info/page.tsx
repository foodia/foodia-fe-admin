'use client';
import {
    Grid,
    Stack,
    TextField,
} from '@mui/material'
import BaseCard from '@/app/(DashboardLayout)/components/shared/BaseCard';
import Info from "@/app/(DashboardLayout)/components/detonator/Info";
import Attachment from '@/app/(DashboardLayout)/components/detonator/Attachment';

const DetonatorInfo = () => {
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

export default DetonatorInfo;