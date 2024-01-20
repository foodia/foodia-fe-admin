import axios from "axios";
import { useEffect, useState } from "react";
import BaseCard from "../shared/DashboardCard";
import DataTableComponent from "./DataTable";
import { useAppContext } from "../shared/Context";
import { getProduct } from "../api/Product";

const List = () => {
  const [data, setData] = useState([]);
  const { setIsUnapprovedProduct } = useAppContext();

  useEffect(() => {
    getProduct(setData);
  }, []);

  return (
    <>
      <BaseCard title="Product Management">
        <DataTableComponent data={data} />
      </BaseCard>
    </>
  );
};

export default List;
