import React from "react";
import {
    Stack,
    TextField
} from "@mui/material";
import BaseCard from "../shared/DashboardCard";

const Info = () => {
    return (
        <BaseCard title="Detonator Info">
            <>
                <Stack spacing={3}>
                    <TextField
                        id="name-basic"
                        label="Fullname"
                        variant="outlined"
                        defaultValue="Agus Susanto"
                        disabled
                    />
                    <TextField
                        id="name-basic"
                        label="Phone Number"
                        variant="outlined"
                        defaultValue="085218469273"
                        disabled
                    />
                    <TextField
                        id="name-basic"
                        label="Email"
                        variant="outlined"
                        defaultValue="agus.susanto@gmail.com"
                        disabled
                    />
                    <TextField
                        id="name-basic"
                        label="Nomor KTP"
                        variant="outlined"
                        defaultValue="3576014403910003"
                        disabled
                    />
                </Stack>
            </>
        </BaseCard>
    );
};

export default Info;
