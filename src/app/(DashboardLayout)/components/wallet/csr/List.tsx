import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import {
  getCsrWalletBallance,
  getCsrWalletCampaign,
  getCsrWalletCurrent,
  getCsrWalletMerchant,
  getCsrWalletTrx,
} from "../../api/CsrWallet";
import { useAppContext } from "../../shared/Context";
import DashboardCard from "../../shared/DashboardCard";
import DataTableComponent from "./DataTable";

type ballance = {
  wallet_name: string;
  total_balance: number;
};

const List = () => {
  const { productData } = useAppContext();
  const { setIsUnapprovedProduct } = useAppContext();
  const [ballanceWalletData, setBallanceWalletData] = useState<ballance>();
  const [ballanceWalletMeta, setBallanceWalletMeta] = useState([]);
  const [currentWalletData, setCurrentWalletData] = useState([]);
  const [currentWalletMeta, setCurrentWalletMeta] = useState({
    page: 0,
    per_page: 0,
    page_count: 0,
    total: 0,
  });
  const [transactionListData, setTransactionListData] = useState([]);
  const [transactionListMeta, setTransactionListMeta] = useState({
    page: 1,
    per_page: 5,
    page_count: 2,
    total: 10,
  });
  const [campaignListData, setCampaignListData] = useState([]);
  const [campaignListMeta, setCampaignListMeta] = useState({
    page: 1,
    per_page: 5,
    page_count: 2,
    total: 10,
  });
  const [merchantPaymentListData, setMerchantPaymentListData] = useState([]);
  const [merchantPaymentListMeta, setMerchantPaymentListMeta] = useState({
    page: 1,
    per_page: 5,
    page_count: 2,
    total: 10,
  });
  const [page, setPage] = useState(1);
  const handleChangePageWalletCurrent = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setPage(value);
    getCsrWalletCurrent(setCurrentWalletData, setCurrentWalletMeta, value);
  };

  const handleChangePageWalletTrx = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setPage(value);
    getCsrWalletTrx(setTransactionListData, setTransactionListMeta, value);
  };

  const handleChangePageWalletCampaign = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setPage(value);
    getCsrWalletCampaign(setCampaignListData, setCampaignListMeta, value);
  };

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
      CSR Wallet
    </Typography>,
  ];

  useEffect(() => {
    getCsrWalletBallance(setBallanceWalletData, setBallanceWalletMeta);
    getCsrWalletCurrent(setCurrentWalletData, setCurrentWalletMeta, page);
    getCsrWalletTrx(setTransactionListData, setTransactionListMeta, page);
    getCsrWalletCampaign(setCampaignListData, setCampaignListMeta, page);
    getCsrWalletMerchant(
      setMerchantPaymentListData,
      setMerchantPaymentListMeta,
      page
    );
  }, []);

  return (
    <>
      <DashboardCard
        title="CSR Wallet"
        breadcrumb={breadcrumbs}
        currentBalance={ballanceWalletData?.total_balance}
      >
        <Box sx={{ paddingX: "40px" }}>
          <DataTableComponent
            currentWalletMeta={currentWalletMeta}
            currentWalletData={currentWalletData}
            onChangePageWalletCurrent={handleChangePageWalletCurrent}
            merchantPaymentListData={merchantPaymentListData}
            onChangePageWalletTrx={handleChangePageWalletTrx}
            merchantPaymentListMeta={merchantPaymentListMeta}
            campaignListData={campaignListData}
            campaignListMeta={campaignListMeta}
            onChangePageWalletCampaign={handleChangePageWalletCampaign}
            transactionListData={transactionListData}
            transactionListMeta={transactionListMeta}
            onChangePageWalletMerchant={handleChangePageWalletMerchant}
          />
        </Box>
      </DashboardCard>
    </>
  );
};

export default List;
