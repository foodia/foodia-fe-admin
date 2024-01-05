import axios from "axios";
import { useEffect, useState } from "react";
import BaseCard from "../shared/DashboardCard";
import DataTableComponent from "./DataTable";
import { useAppContext } from "../shared/Context";

const List = () => {
  const { detonatorData } = useAppContext();
  // const [data, setData] = useState([]);
  // const { setIsUnapprovedDetonator } = useAppContext();

  // const getDetonator = () => {
  //   axios
  //     .get(process.env.NEXT_PUBLIC_BASE + "/detonator/filter", {
  //       headers: { authorization: `Bearer ${localStorage.getItem("TOKEN")}` },
  //     })
  //     .then((res) => {
  //       setData(res.data.body);
  //       const isRejectedPresent: boolean = res.data.body.some(
  //         (obj: any) => obj.status === "rejected"
  //       );
  //       // console.log(isRejectedPresent);
  //       setIsUnapprovedDetonator(isRejectedPresent);
  //     })
  //     .catch((error) => {});
  // };

  // useEffect(() => {
  //   getDetonator();
  // }, []);

  // console.log(isUnapprovedDetonator);

  return (
    <>
      <BaseCard title="Detonator Management">
        <DataTableComponent data={detonatorData} />
      </BaseCard>
    </>
  );
};

export default List;
