import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { getDisbursement } from "../api/Disbursement";
import { useAppContext } from "../shared/Context";
import DashboardCard from "../shared/DashboardCard";
import DataTableComponent from "./DataTable";

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
  const [page, setPage] = useState(1);
  const { isLoading, setIsLoading } = useAppContext();

  const handleChangePage = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setPage(value);
    getDisbursement(setData, setMeta, value, setIsLoading);
  };

  useEffect(() => {
    getDisbursement(setData, setMeta, page, setIsLoading);
  }, []);

  const breadcrumbs = [
    <Typography fontSize="13px" key="3" color="#999" fontWeight={400}>
      Disbursement List
    </Typography>,
  ];

  return (
    <>
      <DashboardCard title="Disbursement Management" breadcrumb={breadcrumbs}>
        <Box sx={{ paddingX: "40px" }}>
          <DataTableComponent
            data={data}
            meta={meta}
            handleChangePage={handleChangePage}
          />
        </Box>
      </DashboardCard>
    </>
  );
};

export default List;
