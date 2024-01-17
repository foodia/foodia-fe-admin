import axios from "axios";
import { useEffect, useState } from "react";
import BaseCard from "../shared/DashboardCard";
import DataTableComponent from "./DataTable";
import { useAppContext } from "../shared/Context";

const List = () => {
  const { merchantData } = useAppContext();
  const [data, setData] = useState([]);
  const { setIsUnapprovedMerchant } = useAppContext();

  const getMerchant = () => {
    axios
      .get(process.env.NEXT_PUBLIC_BASE + "/merchant/filter", {
        headers: { authorization: `Bearer ${localStorage.getItem("TOKEN")}` },
      })
      .then((res) => {
        setData(res.data.body);
        const isRejectedPresent: boolean = res.data.body.some(
          (obj: any) => obj.status === "rejected" || obj.status === "waiting"
        );
        // console.log(isRejectedPresent);
        setIsUnapprovedMerchant(isRejectedPresent);
      })
      .catch((error) => {});
  };

  useEffect(() => {
    getMerchant();
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
