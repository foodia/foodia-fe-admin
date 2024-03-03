import { Box, SelectChangeEvent, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { getCsrWalletMerchant } from "../../api/CsrWallet";
import DashboardCard from "../../shared/DashboardCard";
import DataTableComponent from "./DataTable";

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
  const [searchTextCampaign, setSearchTextCampaign] = useState<string>("");

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

  // let filteredItemsCampaign: any = merchantPaymentListData;
  // if (searchTextCampaign !== "") {
  //   filteredItemsCampaign = merchantPaymentListData.filter((data) =>
  //     data.campaign_name.toLowerCase().includes(searchTextCampaign.toLowerCase())
  //   );
  // }
  // const handleChangeSearchCampaign = (event: SelectChangeEvent) => {
  //   setSearchTextCampaign(event.target.value);
  // };

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
