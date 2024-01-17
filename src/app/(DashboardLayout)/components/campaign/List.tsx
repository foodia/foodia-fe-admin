import axios from "axios";
import { useEffect, useState } from "react";
import BaseCard from "../shared/DashboardCard";
import DataTableComponent from "./DataTable";
import { useAppContext } from "../shared/Context";

const List = () => {
  // const { campaignData } = useAppContext();
  const [data, setData] = useState([]);
  const { setIsUnapprovedCampaign } = useAppContext();

  useEffect(() => {
    getCampaign();
  }, []);

  const getCampaign = () => {
    axios
      .get(process.env.NEXT_PUBLIC_BASE + "/campaign/filter", {
        headers: { authorization: `Bearer ${localStorage.getItem("TOKEN")}` },
      })
      .then((res) => {
        setData(res.data.body);
        // const isRejectedPresent: boolean = res.data.body.some(
        //   (obj: any) => obj.status === "waiting"
        // );
        // setIsUnapprovedCampaign(isRejectedPresent);
      })
      .catch((error) => {});
  };

  return (
    <>
      <BaseCard title="List Campaign">
        <DataTableComponent data={data} />
      </BaseCard>
    </>
  );
};

export default List;
