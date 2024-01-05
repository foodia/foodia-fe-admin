import axios from "axios";
import { useEffect, useState } from "react";
import BaseCard from "../shared/DashboardCard";
import DataTableComponent from "./DataTable";
import { useAppContext } from "../shared/Context";

const List = () => {
  const { merchantData } = useAppContext();
  // const [data, setData] = useState([
  //   // {
  //   //   id: 1,
  //   //   fullname: "mmak",
  //   //   email: "mmak@gmail",
  //   //   phone: 8221122,
  //   //   status: "approved",
  //   //   oauth: {
  //   //     fullname: "dsddsdsd",
  //   //     email: "dsadadd@gmail.com",
  //   //     phone: "082299229922",
  //   //   },
  //   // },
  //   // {
  //   //   id: 2,
  //   //   fullname: "mmak",
  //   //   email: "mmak@gmail",
  //   //   phone: 8221122,
  //   //   status: "approved",
  //   //   oauth: {
  //   //     fullname: "dsddsdsd",
  //   //     email: "dsadadd@gmail.com",
  //   //     phone: "082299229922",
  //   //   },
  //   // },
  // ]);

  // const getMerchant = () => {
  //   axios
  //     .get(process.env.NEXT_PUBLIC_BASE + "/merchant/filter", {
  //       headers: { authorization: `Bearer ${localStorage.getItem("TOKEN")}` },
  //     })
  //     .then((res) => {
  //       setData(res.data.body);
  //     })
  //     .catch((error) => {});
  // };

  // useEffect(() => {
  //   getMerchant();
  // }, []);

  return (
    <>
      <BaseCard title="Merchant Management">
        <DataTableComponent data={merchantData} />
      </BaseCard>
    </>
  );
};

export default List;
