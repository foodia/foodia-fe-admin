import axios from "axios";
import { useEffect, useState } from "react";
import BaseCard from "../shared/DashboardCard";
import DataTableComponent from "./DataTable";
import { useAppContext } from "../shared/Context";
import { getDetonator } from "../api/Detonator";

const List = () => {
  // const { detonatorData } = useAppContext();
  const [data, setData] = useState([]);
  const { setIsUnapprovedDetonator } = useAppContext();

  useEffect(() => {
    getDetonator(setData);
  }, []);

  return (
    <>
      <BaseCard title="Detonator Management">
        <DataTableComponent data={data} />
      </BaseCard>
    </>
  );
};

export default List;
