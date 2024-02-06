import { useEffect, useState } from "react";
import { useAppContext } from "../shared/Context";
import BaseCard from "../shared/DashboardCard";
import DataTableComponent from "./DataTable";
import { Box, Typography } from "@mui/material";
import DashboardCard from "../shared/DashboardCard";
import {
  getCsrWalletCampaign,
  getCsrWalletCurrent,
  getCsrWalletMerchant,
  getCsrWalletTrx,
} from "../api/CsrWallet";

const List = () => {
  const { productData } = useAppContext();
  const { setIsUnapprovedProduct } = useAppContext();
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

  const breadcrumbs = [
    <Typography fontSize="13px" key="3" color="#999" fontWeight={400}>
      CSR Wallet
    </Typography>,
  ];

  useEffect(() => {
    getCsrWalletCurrent(setCurrentWalletData, setCurrentWalletMeta);
    getCsrWalletTrx(setTransactionListData, setTransactionListMeta);
    getCsrWalletCampaign(setCampaignListData, setCampaignListMeta);
    getCsrWalletMerchant(
      setMerchantPaymentListData,
      setMerchantPaymentListMeta
    );
  }, []);

  return (
    <>
      <DashboardCard
        title="CSR Wallet"
        breadcrumb={breadcrumbs}
        currentBalance={9500000}
      >
        <Box sx={{ paddingX: "40px" }}>
          <DataTableComponent
            currentWalletMeta={currentWalletMeta}
            currentWalletData={currentWalletData}
            merchantPaymentListData={merchantPaymentListData}
            merchantPaymentListMeta={merchantPaymentListMeta}
            campaignListData={campaignListData}
            campaignListMeta={campaignListMeta}
            transactionListData={transactionListData}
            transactionListMeta={transactionListMeta}
          />
        </Box>
      </DashboardCard>
    </>
  );
};

export default List;
