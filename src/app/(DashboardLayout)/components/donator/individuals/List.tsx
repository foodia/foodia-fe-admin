import axios from "axios";
import { useEffect, useState } from "react";
import DataTableComponent from "./DataTable";
import { useAppContext } from "../../shared/Context";
import { getDetonator } from "../../api/Detonator";
import DashboardCard from "../../shared/DashboardCard";
import { Box, Typography } from "@mui/material";

interface Meta {
  page: number;
  per_page: number;
  page_count: number;
  total: number;
}

const List = () => {
  // const { detonatorData } = useAppContext();
  const [data, setData] = useState([]);
  const [meta, setMeta] = useState({
    page: 0,
    per_page: 0,
    page_count: 0,
    total: 0,
  });
  const { setIsUnapprovedDetonator } = useAppContext();

  useEffect(() => {
    getDetonator(setData, setMeta);
  }, []);

  const breadcrumbs = [
    <Typography fontSize="13px" key="3" color="#999" fontWeight={400}>
      Individuals Donators
    </Typography>,
  ];

  return (
    <>
      <DashboardCard
        title="Individuals Donator Management"
        breadcrumb={breadcrumbs}
      >
        <Box sx={{ paddingX: "40px" }}>
          <DataTableComponent data={data} meta={meta} />
        </Box>
      </DashboardCard>
    </>
  );
};

export default List;
