import { Box, SelectChangeEvent, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { TableColumn } from "react-data-table-component";
import DataTables from "../../shared/DataTables";
import Link from "next/link";
import { ButtonAction } from "../../shared/Buttons";
import { useRouter } from "next/navigation";
import { useAppContext } from "../../shared/Context";

interface Meta {
  page: number;
  per_page: number;
  page_count: number;
  total: number;
}

interface TransactionListData {
  id: number;
  donator_name: any;
  total_donation: any;
  trx_date: any;
}

interface CampaignListData {
  campaign_id: number;
  campaign_name: any;
  total_donation: any;
  details: { donation_by: any; amount: number }[];
  // donator_list: { id: any; donator: any }[];
  // donations: { id: any; donations_detail: any }[];
}

interface MerchantPaymentListData {
  id: number;
  campaign_name: any;
  merchants: { id: any; name: any }[];
  payments: { id: any; amount: any }[];
  payment_date: any;
}

interface Props {
  transactionListData: TransactionListData[];
  transactionListMeta: Meta;
  onChangePageTransactionList: any;

  campaignListData: CampaignListData[];
  campaignListMeta: Meta;
  onChangePageCampaignList: any;

  merchantPaymentListData: MerchantPaymentListData[];
  merchantPaymentListMeta: Meta;
  onChangePageMerchantPayment: any;
}

const DataTableComponent: React.FC<Props> = ({
  transactionListData,
  transactionListMeta,
  onChangePageTransactionList,

  campaignListData,
  campaignListMeta,
  onChangePageCampaignList,

  merchantPaymentListData,
  merchantPaymentListMeta,
  onChangePageMerchantPayment,
}) => {
  const { setCampaignDonationDetails } = useAppContext();
  const [searchTextTrxData, setSearchTextTrxData] = useState<string>("");
  const [searchTextCampaign, setSearchTextCampaign] = useState<string>("");

  let filteredItemsTrxData: any = transactionListData;
  if (searchTextTrxData !== "") {
    filteredItemsTrxData = transactionListData.filter((data) =>
      data.donator_name.toLowerCase().includes(searchTextTrxData.toLowerCase())
    );
  }
  const handleChangeSearchTrxData = (event: SelectChangeEvent) => {
    setSearchTextTrxData(event.target.value);
  };

  let filteredItemsCampaign: any = campaignListData;
  if (searchTextCampaign !== "") {
    filteredItemsCampaign = campaignListData.filter((data) =>
      data.campaign_name
        .toLowerCase()
        .includes(searchTextCampaign.toLowerCase())
    );
  }
  const handleChangeSearchCampaign = (event: SelectChangeEvent) => {
    setSearchTextCampaign(event.target.value);
  };

  const transactionListColumns: TableColumn<TransactionListData>[] = [
    {
      name: "No",
      selector: (_row, i: any) => i + 1,
      // sortable: true,
      width: "70px",
      // style: {
      //   paddingLeft: "30px",
      // },
    },
    {
      name: "Nama Donator",
      cell: (row: TransactionListData) => <div>{row.donator_name}</div>,
      // sortable: true,
    },
    {
      name: "Jumlah Donasi",
      cell: (row: TransactionListData) => (
        <div>
          {new Intl.NumberFormat("id-ID", {
            style: "currency",
            currency: "IDR",
            minimumFractionDigits: 0,
          }).format(row.total_donation)}
        </div>
      ),
      // sortable: true,
    },
    {
      name: "Tanggal Transaksi",
      cell: (row: TransactionListData) => <div>{row.trx_date}</div>,
      // sortable: true,
      // width: "",
    },
  ];

  const campaignListColumns: TableColumn<CampaignListData>[] = [
    {
      name: "No",
      cell: (_row, i: any) => i + 1,
      // sortable: true,
      width: "70px",
      // style: {
      //   paddingLeft: "30px",
      // },
    },
    {
      name: "Nama Campaign",
      cell: (row: CampaignListData) => (
        <Link
          href={{
            pathname: "/ui-components/pages/campaign/info",
            query: {
              id: row.campaign_id,
            },
          }}
        >
          {row.campaign_name}
        </Link>
      ),
      // sortable: true,
      width: "200px",
    },
    {
      name: "Jumlah Donasi",
      cell: (row: CampaignListData) => (
        <div>
          {new Intl.NumberFormat("id-ID", {
            style: "currency",
            currency: "IDR",
            minimumFractionDigits: 0,
          }).format(row.total_donation)}
        </div>
      ),
      // sortable: true,
    },
    {
      name: "Donasi Oleh",
      cell: (row: CampaignListData) => (
        <div
          style={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          {row.details?.slice(0, 2).map((value: any, i) => (
            <div
              key={value.id}
              style={{ display: "flex", flexDirection: "row" }}
            >
              {i == 1 && value.donation_by?.length > 10
                ? `${value.donation_by.slice(0, 10)}...`
                : value.donation_by}
              {i == 0 && <div style={{ marginRight: "5px" }}>,</div>}
            </div>
          ))}
        </div>
      ),
      // sortable: true,
      width: "200px",
    },
    {
      name: "Detail Donasi",
      cell: (row: CampaignListData) => (
        <div style={{ display: "flex", flexDirection: "row" }}>
          {row.details?.slice(0, 2).map((value: any, i) => (
            <div
              key={value.id}
              style={{ display: "flex", flexDirection: "row" }}
            >
              {new Intl.NumberFormat("id-ID", {
                style: "currency",
                currency: "IDR",
                minimumFractionDigits: 0,
              }).format(value.amount)}
              {i == 0 && <div style={{ marginRight: "5px" }}>,</div>}
            </div>
          ))}
        </div>
      ),
      // sortable: true,
      width: "190px",
    },
    {
      name: "Action",
      cell: (row: CampaignListData, i: number) => (
        <Link
          href={{
            pathname: "/ui-components/pages/wallet/agnostic/info",
          }}
        >
          <ButtonAction
            onClick={() => handleClick(row.details, row.total_donation)}
            label={
              row.details?.length > 1
                ? `View ${row.details?.length - 2} More`
                : "View"
            }
          />
        </Link>
      ),
      // sortable: true,
      width: "180px",
    },
  ];

  const merchantPaymentListColumns: TableColumn<MerchantPaymentListData>[] = [
    {
      name: "No",
      selector: (_row, i: any) => i + 1,
      // sortable: true,
      width: "70px",
      // style: {
      //   paddingLeft: "30px",
      // },
    },
    {
      name: "Nama Campaign",
      cell: (row: MerchantPaymentListData) => <div>{row.campaign_name}</div>,
      // sortable: true,
    },
    {
      name: "Nama Merchant",
      cell: (row: MerchantPaymentListData) => (
        <>
          {row.merchants?.map((value: any, i) => (
            <div
              key={value.id}
              style={{ display: "flex", flexDirection: "row" }}
            >
              {value.name}
              {i + 1 !== value.length && (
                <div style={{ marginRight: "5px" }}>,</div>
              )}
            </div>
          ))}
        </>
      ),
      // sortable: true,
    },
    {
      name: "Jumlah Pembayaran",
      cell: (row: MerchantPaymentListData) => (
        <>
          {row.payments.map((value: any, i) => (
            <div
              key={value.id}
              style={{ display: "flex", flexDirection: "row" }}
            >
              {new Intl.NumberFormat("id-ID", {
                style: "currency",
                currency: "IDR",
                minimumFractionDigits: 0,
              }).format(value.amount)}
              {i + 1 !== row.payments?.length && (
                <div style={{ marginRight: "5px" }}>,</div>
              )}
            </div>
          ))}
        </>
      ),
      // sortable: true,
      // width: "",
    },
    {
      name: "Tgl Pembayaran",
      cell: (row: MerchantPaymentListData) => <div>{row.payment_date}</div>,
      // sortable: true,
      // width: "",
    },
  ];

  const handleClick = (details: any, total_donation: any) => {
    setCampaignDonationDetails(details);
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: "20px" }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          gap: "20px",
          justifyContent: "space-between",
        }}
      >
        <Box sx={{ width: "100%" }}>
          <Typography sx={{ fontWeight: "bold" }}>List Transaksi</Typography>
          <DataTables
            // value={filterText}
            // searchOption={searchOption}
            // valueSearchBy={searchBy}
            onChangeSearch={handleChangeSearchTrxData}
            // onChangeSearchBy={handleChangeSearchBy}
            onChange={onChangePageTransactionList}
            pagination={true}
            meta={transactionListMeta}
            pageItems={filteredItemsTrxData?.length}
            columns={transactionListColumns}
            data={filteredItemsTrxData}
          />
        </Box>
      </Box>
      <Box>
        <Typography sx={{ fontWeight: "bold" }}>List Campaign</Typography>
        <DataTables
          // value={filterText}
          // searchOption={searchOption}
          // valueSearchBy={searchBy}
          onChangeSearch={handleChangeSearchCampaign}
          // onChangeSearchBy={handleChangeSearchBy}
          onChange={onChangePageCampaignList}
          pagination={true}
          meta={campaignListMeta}
          pageItems={filteredItemsCampaign?.length}
          columns={campaignListColumns}
          data={filteredItemsCampaign}
        />
      </Box>
      {/* <Box>
        <Typography sx={{ fontWeight: "bold" }}>
          List Pembayaran Merchant
        </Typography>
        <DataTables
          // value={filterText}
          // searchOption={searchOption}
          // valueSearchBy={searchBy}
          // onChangeSearch={handleChangeSearch}
          // onChangeSearchBy={handleChangeSearchBy}
          // onChange={onChangePageMerchantPayment}
          pagination={true}
          meta={merchantPaymentListMeta}
          // pageItems={merchantPaymentListData?.length}
          columns={merchantPaymentListColumns}
          data={merchantPaymentListData}
        />
      </Box> */}
    </Box>
  );
};

export default DataTableComponent;
