import axios from "axios";
import { useEffect, useState } from "react";
import DataTableComponent from "./DataTable";
import { useAppContext } from "../../shared/Context";
import { getDetonator } from "../../api/Detonator";
import DashboardCard from "../../shared/DashboardCard";

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

  return (
    <>
      <DashboardCard title="Individuals Donator Management">
        <DataTableComponent data={data} meta={meta} />
      </DashboardCard>
    </>
  );
};

export default List;
