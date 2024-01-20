import axios from "axios";
import { useEffect, useState } from "react";
import BaseCard from "../shared/DashboardCard";
import DataTableComponent from "./DataTable";
import { useAppContext } from "../shared/Context";
import { getMerchant } from "../api/Merchant";

const List = () => {
  const [data, setData] = useState([]);
  const { setIsUnapprovedMerchant } = useAppContext();

  useEffect(() => {
    getMerchant(setData);
  }, []);

  return (
    <>
      <BaseCard title="Merchant Management">
        <DataTableComponent data={data} />
      </BaseCard>
    </>
  );
};

export default List;
