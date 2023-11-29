import React from "react";
import {
    Stack,
    TextField
} from "@mui/material";
import BaseCard from "../shared/DashboardCard";

const Info = () => {
    return (
        <BaseCard title="Merchant Info">
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
                        label="Number Link Aja"
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
                        label="Provinsi"
                        variant="outlined"
                        defaultValue="Jawa Barat"
                        disabled
                    />
                     <TextField
                        id="name-basic"
                        label="Kota"
                        variant="outlined"
                        defaultValue="Depok"
                        disabled
                    />
                    <TextField
                        id="name-basic"
                        label="Kecamatan"
                        variant="outlined"
                        defaultValue="Sukmajaya"
                        disabled
                    />
                    <TextField
                        id="name-basic"
                        label="Kode Post"
                        variant="outlined"
                        defaultValue="16171"
                        disabled
                    />
                     <TextField
                        id="name-basic"
                        label="Alamat Lengkap"
                        variant="outlined"
                        defaultValue="Jalan Raya No 2 39A Blok F"
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
