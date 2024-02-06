import axios from "axios";
import { useEffect, useState } from "react";
import BaseCard from "../../shared/DashboardCard";
import DataTableComponent from "./DataTable";
import { useAppContext } from "../../shared/Context";
import { getProduct } from "../../api/Product";
import { Box, Typography } from "@mui/material";
import DashboardCard from "../../shared/DashboardCard";
import {
  getAgnosticWalletCampaign,
  getAgnosticWalletTrx,
} from "../../api/AgnosticWallet";

const List = () => {
  const { productData } = useAppContext();
  const { setIsUnapprovedProduct } = useAppContext();
  const [transactionListData, setTransactionListData] = useState([]);
  const [transactionListMeta, setTransactionListMeta] = useState({
    page: 0,
    per_page: 0,
    page_count: 0,
    total: 0,
  });
  const [campaignListData, setCampaignListData] = useState([]);
  const [campaignListMeta, setCampaignListMeta] = useState({
    page: 0,
    per_page: 0,
    page_count: 0,
    total: 0,
  });
  const [merchantPaymentListData, setMerchantPaymentListData] = useState([
    {
      id: 1,
      campaign_name: "Tebar 1000 Paket Jumat Berkah",
      merchants: [
        { id: 1, name: "Nasi Kapau Merdeka" },
        { id: 2, name: "Sate Ayam" },
      ],
      payments: [
        { id: 1, amount: 30000 },
        { id: 2, amount: 200000 },
      ],
      payment_date: "7 Jan 2024 15:30:32",
    },
    {
      id: 2,
      campaign_name: "Panti Asuhan Asanah",
      merchants: [{ id: 1, name: "Bakmi Bangka 88" }],
      payments: [{ id: 1, amount: 3000000 }],
      payment_date: "6 Jan 2024 11:21:01",
    },
    {
      id: 3,
      campaign_name: "Sarapan Pagi SD Cerai Abadi",
      merchants: [{ id: 1, name: "Christie Bakery" }],
      payments: [{ id: 1, amount: 1500000 }],
      payment_date: "6 Jan 2024 09:21:01",
    },
  ]);
  const [merchantPaymentListMeta, setMerchantPaymentListMeta] = useState({
    page: 1,
    per_page: 5,
    page_count: 2,
    total: 10,
  });

  useEffect(() => {
    getAgnosticWalletTrx(setTransactionListData, setTransactionListMeta);
    getAgnosticWalletCampaign(setCampaignListData, setCampaignListMeta);
  }, []);

  const breadcrumbs = [
    <Typography fontSize="13px" key="3" color="#999" fontWeight={400}>
      Agnostic Wallet
    </Typography>,
  ];

  return (
    <>
      <DashboardCard
        title="Agnostic Wallet"
        currentBalance={9500000}
        breadcrumb={breadcrumbs}
      >
        <Box sx={{ paddingX: "40px" }}>
          <DataTableComponent
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
