import axios from "axios";
import { useEffect, useState } from "react";
import DashboardCard from "../../shared/DashboardCard";
import DataTableComponent from "./DataTable";
import { useAppContext } from "../../shared/Context";
import { getProduct } from "../../api/Product";

const List = () => {
  const { productData } = useAppContext();
  const [data, setData] = useState([]);
  const { setIsUnapprovedProduct } = useAppContext();

  useEffect(() => {
    getProduct(setData);
  }, []);

  return (
    <>
      <DashboardCard title="Agnostic Wallet" currentBalance={9500000}>
        <DataTableComponent data={data} />
      </DashboardCard>
    </>
  );
};

export default List;
