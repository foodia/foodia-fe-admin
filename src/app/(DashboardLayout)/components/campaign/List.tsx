import axios from "axios";
import { useEffect, useState } from "react";
import BaseCard from "../shared/DashboardCard";
import DataTableComponent from "./DataTable";

const List = () => {
  const [data, setData] = useState([
    // {
    //   id: 1,
    //   fullname: "mmak",
    //   email: "mmak@gmail",
    //   phone: 8221122,
    //   status: "approved",
    //   oauth: {
    //     fullname: "dsddsdsd",
    //     email: "dsadadd@gmail.com",
    //     phone: "082299229922",
    //   },
    // },
    // {
    //   id: 2,
    //   fullname: "mmak",
    //   email: "mmak@gmail",
    //   phone: 8221122,
    //   status: "approved",
    //   oauth: {
    //     fullname: "dsddsdsd",
    //     email: "dsadadd@gmail.com",
    //     phone: "082299229922",
    //   },
    // },
  ]);

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
