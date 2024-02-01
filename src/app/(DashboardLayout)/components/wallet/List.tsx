import { useEffect, useState } from "react";
import { useAppContext } from "../shared/Context";
import BaseCard from "../shared/DashboardCard";
import DataTableComponent from "./DataTable";
import { Box, Typography } from "@mui/material";
import DashboardCard from "../shared/DashboardCard";

const List = () => {
  const { productData } = useAppContext();
  const { setIsUnapprovedProduct } = useAppContext();
  const [currentWalletData, setCurrentWalletData] = useState([
    {
      id: 1,
      donator_name: "PT Telkomsel",
      donation_total: 30000000,
      donation_left: 0,
    },
    {
      id: 2,
      donator_name: "Koperasi Telkomsel",
      donation_total: 3000000,
      donation_left: 0,
    },
    {
      id: 3,
      donator_name: "MTT Telkomsel",
      donation_total: 3000000,
      donation_left: 850000,
    },
    {
      id: 4,
      donator_name: "PT ABC",
      donation_total: 1000000,
      donation_left: 0,
    },
    {
      id: 5,
      donator_name: "PT XYZ",
      donation_total: 1000000,
      donation_left: 1000000,
    },
  ]);
  const [currentWalletMeta, setCurrentWalletMeta] = useState({
    page: 1,
    per_page: 5,
    page_count: 2,
    total: 10,
  });
  const [transactionListData, setTransactionListData] = useState([
    {
      id: 1,
      donator_name: "PT Telkomsel",
      donation_total: 30000000,
      transaction_date: "4 Jan 2024 15:30:32",
    },
    {
      id: 2,
      donator_name: "Koperasi Telkomsel",
      donation_total: 3000000,
      transaction_date: "2 Jan 2024 15:30:32",
    },
    {
      id: 3,
      donator_name: "MTT Telkomsel",
      donation_total: 3000000,
      transaction_date: "2 Jan 2024 15:30:32",
    },
    {
      id: 4,
      donator_name: "PT ABC",
      donation_total: 3000000,
      transaction_date: "2 Jan 2024 15:30:32",
    },
    {
      id: 5,
      donator_name: "PT XYZ",
      donation_total: 3000000,
      transaction_date: "2 Jan 2024 15:30:32",
    },
  ]);
  const [transactionListMeta, setTransactionListMeta] = useState({
    page: 1,
    per_page: 5,
    page_count: 2,
    total: 10,
  });
  const [campaignListData, setCampaignListData] = useState([
    {
      id: 1,
      campaign_name: "Tebar 1000 Paket Jumat Berkah",
      donation_total: 30000000,
      donator_list: [
        { id: 1, donator: "PT Telkomsel" },
        { id: 2, donator: "PT ABC" },
      ],
      donations: [
        { id: 1, donations_detail: 30000 },
        { id: 2, donations_detail: 200000 },
      ],
    },
    {
      id: 2,
      campaign_name: "Panti Asuhan Asanah",
      donation_total: 31000000,
      donator_list: [{ id: 1, donator: "Koperasi Telkomsel" }],
      donations: [{ id: 1, donations_detail: 300000 }],
    },
    {
      id: 3,
      campaign_name: "Sarapan Pagi SD Cerai Abadi",
      donation_total: 1500000,
      donator_list: [{ id: 1, donator: "MTT Telkomsel" }],
      donations: [{ id: 1, donations_detail: 1500000 }],
    },
  ]);
  const [campaignListMeta, setCampaignListMeta] = useState({
    page: 1,
    per_page: 5,
    page_count: 2,
    total: 10,
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

  const breadcrumbs = [
    <Typography fontSize="13px" key="3" color="#999" fontWeight={400}>
      CSR Wallet
    </Typography>,
  ];

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
