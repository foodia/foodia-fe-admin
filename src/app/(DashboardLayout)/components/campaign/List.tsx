import axios from "axios";
import { useEffect, useState } from "react";
import BaseCard from "../shared/DashboardCard";
import DataTableComponent from "./DataTable";
import { useAppContext } from "../shared/Context";
import { getCampaign } from "../api/Campaign";

const List = () => {
  const [data, setData] = useState([]);
  const { setIsUnapprovedCampaign } = useAppContext();

  useEffect(() => {
    getCampaign(setData);
  }, []);

  return (
    <>
      <BaseCard title="List Campaign">
        <DataTableComponent data={data} />
      </BaseCard>
    </>
  );
};

export default List;
