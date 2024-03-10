import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { getMerchant } from "../api/Merchant";
import { useAppContext } from "../shared/Context";
import BaseCard from "../shared/DashboardCard";
import DataTableComponent from "./DataTable";

const List = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [meta, setMeta] = useState({
    page: 0,
    per_page: 0,
    page_count: 0,
    total: 0,
  });
  const { isLoading, setIsLoading } = useAppContext();

  const handleChangePage = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setPage(value);
    getMerchant(setData, setMeta, value, setIsLoading);
  };

  useEffect(() => {
    getMerchant(setData, setMeta, page, setIsLoading);
  }, []);

  const breadcrumbs = [
    <Typography fontSize="13px" key="3" color="#999" fontWeight={400}>
      Merchant List
    </Typography>,
  ];

  return (
    <>
      <BaseCard title="Merchant Management" breadcrumb={breadcrumbs}>
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
