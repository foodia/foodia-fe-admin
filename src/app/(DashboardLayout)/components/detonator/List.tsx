import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { getDetonator } from "../api/Detonator";
import { useAppContext } from "../shared/Context";
import BaseCard from "../shared/DashboardCard";
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
  const { setIsUnapprovedDetonator } = useAppContext();
  const [page, setPage] = useState(1);
  const { isLoading, setIsLoading } = useAppContext();

  useEffect(() => {
    getDetonator(setData, setMeta, page, setIsLoading);
  }, []);

  const handleChangePage = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setPage(value);
    getDetonator(setData, setMeta, value, setIsLoading);
  };

  const breadcrumbs = [
    <Typography fontSize="13px" key="3" color="#999" fontWeight={400}>
      Detonator List
    </Typography>,
  ];

  return (
    <>
      <BaseCard title="Detonator Management" breadcrumb={breadcrumbs}>
        <Box sx={{ paddingX: "30px" }}>
          <DataTableComponent
            data={data}
            meta={meta}
            handleChange={handleChangePage}
          />
        </Box>
      </BaseCard>
    </>
  );
};

export default List;
