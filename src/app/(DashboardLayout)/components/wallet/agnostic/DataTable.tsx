import { Box, SelectChangeEvent, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { TableColumn } from "react-data-table-component";
import DataTables from "../../shared/DataTables";
import Link from "next/link";
import { ButtonAction } from "../../shared/Buttons";
import { useRouter } from "next/router";

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
  // const [searchBy, setSearchBy] = useState<string>("name");
  // const [searchText, setSearchText] = useState<string>("");

  // const handleChangeSearchBy = (event: SelectChangeEvent) => {
  //   setSearchBy(event.target.value);
  // };

  // const handleChange = (event: SelectChangeEvent) => {
  //   setFilterText(event.target.value);
  // };

  // const handleChangeSearch = (event: SelectChangeEvent) => {
  //   setSearchText(event.target.value);
  // };

  // let filteredItems: any;
  // if (filterText === "unapproved") {
  //   filteredItems = data.filter(
  //     (data) =>
  //       data.status.toLowerCase() !== "approved" &&
  //       (searchBy === "name"
  //         ? data.name.toLowerCase().includes(searchText.toLowerCase())
  //         : searchBy === "price"
  //         ? data.price.toLowerCase().includes(searchText.toLowerCase())
  //         : data.description.toLowerCase().includes(searchText.toLowerCase()))
  //   );
  // } else {
  //   filteredItems = data.filter(
  //     (data) =>
  //       data.status.toLowerCase() === "approved" &&
  //       (searchBy === "name"
  //         ? data.name.toLowerCase().includes(searchText.toLowerCase())
  //         : searchBy === "price"
  //         ? data.price.toLowerCase().includes(searchText.toLowerCase())
  //         : data.description.toLowerCase().includes(searchText.toLowerCase()))
  //   );
  // }
  // const searchOption = [
  //   {
  //     id: 1,
  //     value: "name",
  //     label: "Name",
  //   },
  //   {
  //     id: 2,
  //     value: "price",
  //     label: "Price",
  //   },
  //   {
  //     id: 3,
  //     value: "description",
  //     label: "Description",
  //   },
  // ];

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
            flexDirection: "column",
            gap: "10px",
            paddingTop: "10px",
            paddingBottom: "10px",
          }}
        >
          {row.details?.map((value: any, i) => (
            <div
              key={value.id}
              style={{ display: "flex", flexDirection: "row" }}
            >
              {/* {i === 1 && value.donation_by?.length > 10
                ? `${value.donation_by.slice(0, 10)}...`
                : value.donation_by} */}
              {value.donation_by}
              {i + 1 !== value.length && (
                <div style={{ marginRight: "5px" }}>,</div>
              )}
            </div>
          ))}
        </div>
      ),
      // sortable: true,
      width: "auto",
    },
    {
      name: "Detail Donasi",
      cell: (row: CampaignListData) => (
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          {row.details?.map((value: any, i) => (
            <div
              key={value.id}
              style={{ display: "flex", flexDirection: "row" }}
            >
              {new Intl.NumberFormat("id-ID", {
                style: "currency",
                currency: "IDR",
                minimumFractionDigits: 0,
              }).format(value.amount)}
              {i + 1 !== value.length && (
                <div style={{ marginRight: "5px" }}>,</div>
              )}
            </div>
          ))}
        </div>
      ),
      // sortable: true,
      // width: "",
    },
    {
      name: "Action",
      cell: (row: CampaignListData, i: number) => (
        <Link
          href={{
            pathname: "/ui-components/pages/wallet/agnostic/info",
            query: {
              campaign_id: row.campaign_id,
              campaign_name: row.campaign_name,
              total_donations: row.total_donation,
            },
          }}
        >
          <ButtonAction />
        </Link>
      ),
      // sortable: true,
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
            // onChangeSearch={handleChangeSearch}
            // onChangeSearchBy={handleChangeSearchBy}
            onChange={onChangePageTransactionList}
            pagination={true}
            meta={transactionListMeta}
            pageItems={transactionListData?.length}
            columns={transactionListColumns}
            data={transactionListData}
          />
        </Box>
      </Box>
      <Box>
        <Typography sx={{ fontWeight: "bold" }}>List Campaign</Typography>
        <DataTables
          // value={filterText}
          // searchOption={searchOption}
          // valueSearchBy={searchBy}
          // onChangeSearch={handleChangeSearch}
          // onChangeSearchBy={handleChangeSearchBy}
          onChange={onChangePageCampaignList}
          pagination={true}
          meta={campaignListMeta}
          pageItems={campaignListData?.length}
          columns={campaignListColumns}
          data={campaignListData}
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
