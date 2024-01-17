import axios from "axios";
import { useEffect, useState } from "react";
import DashboardCard from "../../shared/DashboardCard";
import DataTableComponent from "./DataTable";
import { useAppContext } from "../../shared/Context";

const List = () => {
  const { productData } = useAppContext();
  const [data, setData] = useState([]);
  const { setIsUnapprovedProduct } = useAppContext();

  const getProduct = () => {
    axios
      .get(process.env.NEXT_PUBLIC_BASE + "/merchant-product/filter", {
        headers: { authorization: `Bearer ${localStorage.getItem("TOKEN")}` },
      })
      .then((res) => {
        setData(res.data.body);
        const isRejectedPresent: boolean = res.data.body.some(
          (obj: any) => obj.status === "rejected" || obj.status === "waiting"
        );
        // console.log(isRejectedPresent);
        setIsUnapprovedProduct(isRejectedPresent);
      })
      .catch((error) => {});
  };

  useEffect(() => {
    getProduct();
  }, []);

  return (
    <>
      <DashboardCard title="Agnostic Wallet" currentBalance={9500000}>
        <DataTableComponent data={data} />
      </DashboardCard>
    </>
  );
};

export default List;
