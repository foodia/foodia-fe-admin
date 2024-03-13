import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { getCampaign } from "../api/Campaign";
import { useAppContext } from "../shared/Context";
import BaseCard from "../shared/DashboardCard";
import DataTableComponent from "./DataTable";

const List = () => {
  const breadcrumbs = [
    <Typography fontSize="13px" key="3" color="#999" fontWeight={400}>
      Campaign List
    </Typography>,
  ];

  return (
    <>
      <BaseCard title="List Campaign" breadcrumb={breadcrumbs}>
        <Box sx={{ paddingX: "30px" }}>
          <DataTableComponent />
        </Box>
      </BaseCard>
    </>
  );
};

export default List;
