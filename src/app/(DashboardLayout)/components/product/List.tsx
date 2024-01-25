import axios from "axios";
import { useEffect, useState } from "react";
import BaseCard from "../shared/DashboardCard";
import DataTableComponent from "./DataTable";
import { useAppContext } from "../shared/Context";
import { getProduct } from "../api/Product";
import { Typography } from "@mui/material";

const List = () => {
  const [data, setData] = useState([]);
  const [meta, setMeta] = useState({
    page: 0,
    per_page: 0,
    page_count: 0,
    total: 0,
  });
  const { setIsUnapprovedProduct } = useAppContext();

  useEffect(() => {
    getProduct(setData, setMeta);
  }, []);

  const breadcrumbs = [
    <Typography fontSize="13px" key="3" color="#999" fontWeight={400}>
      Products
    </Typography>,
  ];

  return (
    <>
      <BaseCard title="Product Management" breadcrumb={breadcrumbs}>
        <DataTableComponent data={data} meta={meta} />
      </BaseCard>
    </>
  );
};

export default List;
