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

  const getProduct = () => {
    axios
      .get("https://api.foodia-dev.nuncorp.id/api/v1/detonator/filter", {
        headers: { authorization: `Bearer ${localStorage.getItem("TOKEN")}` },
      })
      .then((res) => {
        setData(res.data.body);
      })
      .catch((error) => {});
  };

  useEffect(() => {
    getProduct();
  }, []);

  return (
    <>
      <BaseCard title="Product Management">
        <DataTableComponent data={data} />
      </BaseCard>
    </>
  );
};

export default List;
