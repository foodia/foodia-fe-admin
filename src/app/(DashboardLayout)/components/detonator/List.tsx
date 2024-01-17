import axios from "axios";
import { useEffect, useState } from "react";
import BaseCard from "../shared/DashboardCard";
import DataTableComponent from "./DataTable";
import { useAppContext } from "../shared/Context";

const List = () => {
  // const { detonatorData } = useAppContext();
  const [data, setData] = useState([]);
  const { setIsUnapprovedDetonator } = useAppContext();

  const getDetonator = () => {
    axios
      .get(
        process.env.NEXT_PUBLIC_BASE + "/detonator/filter?page=1&per_page=10",
        {
          headers: { authorization: `Bearer ${localStorage.getItem("TOKEN")}` },
        }
      )
      .then((res) => {
        setData(res.data.body);
        // const isRejectedPresent: boolean = res.data.body.some(
        //   (obj: any) => obj.status === "waiting" || obj.status === "rejected"
        // );
        // setIsUnapprovedDetonator(isRejectedPresent);
      })
      .catch((error) => {});
  };

  useEffect(() => {
    getDetonator();
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
