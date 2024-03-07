import axios from "axios";
import { useEffect, useState } from "react";
import BaseCard from "../shared/DashboardCard";
import DataTableComponent from "./DataTable";
import { useAppContext } from "../shared/Context";
import { getCampaign } from "../api/Campaign";
import { Box, Typography } from "@mui/material";

const List = () => {
  const [data, setData] = useState([]);
  const [meta, setMeta] = useState({
    page: 0,
    per_page: 0,
    page_count: 0,
    total: 0,
  });
  const { setIsUnapprovedCampaign } = useAppContext();
  const [page, setPage] = useState(1);

  useEffect(() => {
    getCampaign(setData, setMeta, page);
  }, []);

  const breadcrumbs = [
    <Typography fontSize="13px" key="3" color="#999" fontWeight={400}>
      Campaign List
    </Typography>,
  ];

  const handleChangePage = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setPage(value);
    getCampaign(setData, setMeta, value);
  };

  return (
    <>
      <BaseCard title="List Campaign" breadcrumb={breadcrumbs}>
        <Box sx={{ paddingX: "30px" }}>
          <DataTableComponent
            data={data}
            meta={meta}
            handleChangePage={handleChangePage}
          />
        </Box>
      </BaseCard>
    </>
  );
};

export default List;
