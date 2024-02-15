import { useEffect, useState } from "react";
import { useAppContext } from "../../shared/Context";
import BaseCard from "../../shared/DashboardCard";
import DataTableComponent from "./DataTable";
import { Box, Typography } from "@mui/material";
import DashboardCard from "../../shared/DashboardCard";
import {
  getCsrWalletBallance,
  getCsrWalletCampaign,
  getCsrWalletCurrent,
  getCsrWalletMerchant,
  getCsrWalletTrx,
} from "../../api/CsrWallet";

type ballance = {
  wallet_name: string;
  total_balance: number;
};

const List = () => {
  const [merchantPaymentListData, setMerchantPaymentListData] = useState([]);
  const [merchantPaymentListMeta, setMerchantPaymentListMeta] = useState({
    page: 1,
    per_page: 5,
    page_count: 2,
    total: 10,
  });
  const [page, setPage] = useState(1);

  const handleChangePageWalletMerchant = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setPage(value);
    getCsrWalletMerchant(
      setMerchantPaymentListData,
      setMerchantPaymentListMeta,
      value
    );
  };

  const breadcrumbs = [
    <Typography fontSize="13px" key="3" color="#999" fontWeight={400}>
      Merchant Payments
    </Typography>,
  ];

  useEffect(() => {
    getCsrWalletMerchant(
      setMerchantPaymentListData,
      setMerchantPaymentListMeta,
      page
    );
  }, []);

  return (
    <>
      <DashboardCard
        title="Merchant Payments"
        breadcrumb={breadcrumbs}
        // currentBalance={ballanceWalletData?.total_balance}
      >
        <Box sx={{ paddingX: "40px" }}>
          <DataTableComponent
            merchantPaymentListData={merchantPaymentListData}
            merchantPaymentListMeta={merchantPaymentListMeta}
            onChangePageWalletMerchant={handleChangePageWalletMerchant}
          />
        </Box>
      </DashboardCard>
    </>
  );
};

export default List;
