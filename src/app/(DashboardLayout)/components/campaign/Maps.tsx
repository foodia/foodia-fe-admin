import { Box, CircularProgress, Typography } from "@mui/material";
import dynamic from "next/dynamic";
import React from "react";
import BaseCard from "../shared/DashboardCard";
import DetailCard from "../shared/DetailCard";
import { useAppContext } from "../shared/Context";

interface ChildProps {
  data: {
    latitude: any;
    longitude: any;
    address: string;
    sub_district: string;
    city: string;
    province: string;
    postal_code: string;
  };
}

const Maps: React.FC<ChildProps> = ({ data }) => {
  const { isLoading } = useAppContext();
  const Map = React.useMemo(
    () => dynamic(() => import("../shared/LeafLet"), { ssr: false }),
    []
  );

  // console.log("asdsa", parseFloat(data.latitude));
  // console.log("asdsa", parseFloat(data.longitude));

  return (
    <DetailCard title="Location">
      {!isLoading ? (
        <Box sx={{ width: "100%" }}>
          <Typography sx={{ fontWeight: "bold", marginBottom: "10px" }}>
            {data.address}, {data.sub_district}, {data.city}, {data.province},{" "}
            {data.postal_code}
          </Typography>
          <Map lat={data.latitude} long={data.longitude} />
        </Box>
      ) : (
        <CircularProgress color="secondary" />
      )}
    </DetailCard>
  );
};

export default Maps;
