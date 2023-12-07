import { useEffect, useState } from "react";
import { Box, Stack, TextField, Typography } from "@mui/material";
import BaseCard from "../shared/DashboardCard";
import { useSearchParams } from "next/navigation";
import axios from "axios";

// type Props = {
//   id: string;
//   ktp_number: string;
//   status: string;
//   no_link_aja: string;
//   province: string;
//   city: string;
//   sub_district: string;
//   postal_code: string;
//   address: string;
//   oauth: { fullname: string; email: string; phone: string };
// };

interface ChildProps {
  data: {
    id: number;
    ktp_number: string;
    status: string;
    no_link_aja: string;
    province: string;
    city: string;
    sub_district: string;
    postal_code: string;
    address: string;
    oauth: { fullname: string; email: string; phone: string };
  };
}

const Info: React.FC<ChildProps> = ({ data }) => {
  // const searchParams = useSearchParams();
  // const [data, setData] = useState<Props>({
  //   id: "",
  //   ktp_number: "",
  //   status: "",
  //   no_link_aja: "",
  //   province: "",
  //   city: "",
  //   sub_district: "",
  //   postal_code: "",
  //   address: "",
  //   oauth: { fullname: "", email: "", phone: "" },
  // });

  // useEffect(() => {
  //   getMerchantDetail();
  // }, []);

  // const getMerchantDetail = () => {
  //   axios
  //     .get(
  //       `https://api.foodia-dev.nuncorp.id/api/v1/merchant/fetch/${searchParams.get(
  //         "id"
  //       )}`,
  //       {
  //         headers: { authorization: `Bearer ${localStorage.getItem("TOKEN")}` },
  //       }
  //     )
  //     .then((res) => {
  //       setData(res.data.body);
  //     })
  //     .catch((error) => {});
  // };
  return (
    <BaseCard title="Merchant Info">
      <Stack spacing={3}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "start",
          }}
        >
          <Typography>Fullname : </Typography>
          <TextField
            fullWidth
            id="name-basic"
            variant="outlined"
            defaultValue={data.oauth.fullname}
            disabled
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "start",
          }}
        >
          <Typography>Phone Number : </Typography>
          <TextField
            fullWidth
            id="name-basic"
            variant="outlined"
            defaultValue={data.oauth.phone}
            disabled
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "start",
          }}
        >
          <Typography>Number Link Aja : </Typography>
          <TextField
            fullWidth
            id="name-basic"
            variant="outlined"
            defaultValue={data.no_link_aja}
            disabled
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "start",
          }}
        >
          <Typography>Email : </Typography>
          <TextField
            fullWidth
            id="name-basic"
            variant="outlined"
            defaultValue={data.oauth.email}
            disabled
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "start",
          }}
        >
          <Typography>Provinsi : </Typography>
          <TextField
            fullWidth
            id="name-basic"
            variant="outlined"
            defaultValue={data.province}
            disabled
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "start",
          }}
        >
          <Typography>Kota : </Typography>
          <TextField
            fullWidth
            id="name-basic"
            variant="outlined"
            defaultValue={data.city}
            disabled
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "start",
          }}
        >
          <Typography>Kecamatan : </Typography>
          <TextField
            fullWidth
            id="name-basic"
            variant="outlined"
            defaultValue={data.sub_district}
            disabled
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "start",
          }}
        >
          <Typography>Kode Pos : </Typography>
          <TextField
            fullWidth
            id="name-basic"
            variant="outlined"
            defaultValue={data.postal_code}
            disabled
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "start",
          }}
        >
          <Typography>Alamat Lengkap : </Typography>
          <TextField
            fullWidth
            id="name-basic"
            variant="outlined"
            defaultValue={data.address}
            disabled
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "start",
          }}
        >
          <Typography>Nomor KTP : </Typography>
          <TextField
            fullWidth
            id="name-basic"
            variant="outlined"
            defaultValue={data.ktp_number}
            disabled
          />
        </Box>
      </Stack>
    </BaseCard>
  );
};

export default Info;
