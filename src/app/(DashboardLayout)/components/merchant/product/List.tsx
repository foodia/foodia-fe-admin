import axios from "axios";
import { useEffect, useState } from "react";
import BaseCard from "../../shared/DashboardCard";
import DataTableComponent from "./DataTable";

interface ChildProps {
  merchant_id: number;
}

const List: React.FC<ChildProps> = ({ merchant_id }) => {
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

  console.log("merchant === ", merchant_id);

  const getMerchant = () => {
    axios
      .get(
        `https://api.foodia-dev.nuncorp.id/api/v1/merchant-product/filter?merchant_id=2`,
        {
          headers: { authorization: `Bearer ${localStorage.getItem("TOKEN")}` },
        }
      )
      .then((res) => {
        setData(res.data.body);
      })
      .catch((error) => {});
  };

  useEffect(() => {
    getMerchant();
  }, []);

  return (
    <>
      <BaseCard title="Merchant Menu">
        <DataTableComponent data={data} />
      </BaseCard>
    </>
  );
};

export default List;
