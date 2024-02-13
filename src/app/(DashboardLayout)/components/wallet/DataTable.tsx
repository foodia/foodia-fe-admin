import { Box, SelectChangeEvent, Typography } from "@mui/material";
import React, { useState } from "react";
import { TableColumn } from "react-data-table-component";
import DataTables from "../shared/DataTables";
import Link from "next/link";

interface Meta {
  page: number;
  per_page: number;
  page_count: number;
  total: number;
}

interface CurrentWalletData {
  id: number;
  donator_name: any;
  total_donation: any;
  remaining_balance: any;
}
[];

interface TransactionListData {
  id: number;
  donator_name: any;
  total_donation: any;
  trx_date: any;
}
[];

interface CampaignListData {
  campaign_id: number;
  campaign_name: any;
  total_donation: any;
  details: { donation_by: any; amount: number }[];
  // donator_list: { id: any; donator: any }[];
  // donations: { id: any; donations_detail: any }[];
}
[];

interface MerchantPaymentListData {
  campaign_id: number;
  campaign_name: any;
  details: {
    merchant_id: any;
    merchant_name: any;
    total_amount: number;
    payment_date: string;
  }[];
}
[];

interface Props {
  currentWalletData: CurrentWalletData[];
  currentWalletMeta: Meta;
  onChangePageWalletCurrent: any;

  transactionListData: TransactionListData[];
  transactionListMeta: Meta;
  onChangePageWalletTrx: any;

  campaignListData: CampaignListData[];
  campaignListMeta: Meta;
  onChangePageWalletCampaign: any;

  merchantPaymentListData: MerchantPaymentListData[];
  merchantPaymentListMeta: Meta;
  onChangePageWalletMerchant: any;
}

const currentWalletColumns: TableColumn<CurrentWalletData>[] = [
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
    cell: (row: CurrentWalletData) => <div>{row.donator_name}</div>,
    // sortable: true,
  },
  {
    name: "Total Donasi",
    cell: (row: CurrentWalletData) => (
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
    name: "Sisa Donasi",
    cell: (row: CurrentWalletData) => (
      <div>
        {new Intl.NumberFormat("id-ID", {
          style: "currency",
          currency: "IDR",
          minimumFractionDigits: 0,
        }).format(row.remaining_balance)}
      </div>
    ),
    // sortable: true,
    // width: "",
  },
];

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
    selector: (_row, i: any) => i + 1,
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
      <>
        {row.details?.map((value: any, i) => (
          <Link
            href=""
            key={value.id}
            style={{ display: "flex", flexDirection: "row" }}
          >
            {/* {value.donator} */}
            {i === 1 && value.donation_by?.length > 10
              ? `${value.donation_by.slice(0, 10)}...`
              : value.donator}
            {i + 1 !== row.details?.length && (
              <div style={{ marginRight: "5px" }}>,</div>
            )}
          </Link>
        ))}
      </>
    ),
    // sortable: true,
    // width: "",
  },
  {
    name: "Detail Donasi",
    cell: (row: CampaignListData) => (
      <>
        {row.details?.map((value: any, i) => (
          <div key={value.id} style={{ display: "flex", flexDirection: "row" }}>
            {new Intl.NumberFormat("id-ID", {
              style: "currency",
              currency: "IDR",
              minimumFractionDigits: 0,
            }).format(value.amount)}
            {i + 1 !== row.details?.length && (
              <div style={{ marginRight: "5px" }}>,</div>
            )}
          </div>
        ))}
      </>
    ),
    // sortable: true,
    // width: "",
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
    cell: (row: MerchantPaymentListData) => (
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
    name: "Nama Merchant",
    cell: (row: MerchantPaymentListData) => (
      <>
        {row.details?.map((value: any, i) => (
          <Link
            href={{
              pathname: "/ui-components/pages/merchant/info",
              query: {
                id: value.merchant_id,
              },
            }}
            key={value.id}
            style={{ display: "flex", flexDirection: "row" }}
          >
            {/* {value.merchant_name} */}
            {i === 1 && value.donation_by?.length > 10
              ? `${value.donation_by.slice(0, 10)}...`
              : value.merchant_name}
            {i + 1 !== row.details?.length && (
              <div style={{ marginRight: "5px" }}>,</div>
            )}
          </Link>
        ))}
      </>
    ),
    // sortable: true,
  },
  {
    name: "Jumlah Pembayaran",
    cell: (row: MerchantPaymentListData) => (
      <>
        {row.details?.map((value: any, i) => (
          <div key={value.id} style={{ display: "flex", flexDirection: "row" }}>
            {new Intl.NumberFormat("id-ID", {
              style: "currency",
              currency: "IDR",
              minimumFractionDigits: 0,
            }).format(value.total_amount)}
            {i + 1 !== row.details?.length && (
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
    cell: (row: MerchantPaymentListData) => (
      <>
        {row.details?.map((value: any, i) => (
          <div key={value.id} style={{ display: "flex", flexDirection: "row" }}>
            {/* {value.payment_date} */}
            {i === 1 && value.donation_by?.length > 10
              ? `${value.donation_by.slice(0, 10)}...`
              : value.payment_date}
            {i + 1 !== row.details?.length && (
              <div style={{ marginRight: "5px" }}>,</div>
            )}
          </div>
        ))}
      </>
    ),
    // sortable: true,
    // width: "",
  },
];

const DataTableComponent: React.FC<Props> = ({
  currentWalletData,
  currentWalletMeta,
  onChangePageWalletCurrent,

  transactionListData,
  transactionListMeta,
  onChangePageWalletTrx,

  campaignListData,
  campaignListMeta,
  onChangePageWalletCampaign,

  merchantPaymentListData,
  merchantPaymentListMeta,
  onChangePageWalletMerchant,
}) => {
  // const [filterText, setFilterText] = useState<string>("unapproved");
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
        <Box sx={{ width: "50%" }}>
          <Typography sx={{ fontWeight: "bold" }}>Current Wallet</Typography>
          <DataTables
            // value={filterText}
            // searchOption={searchOption}
            // valueSearchBy={searchBy}
            // onChangeSearch={handleChangeSearch}
            // onChangeSearchBy={handleChangeSearchBy}
            onChange={onChangePageWalletCurrent}
            pagination={true}
            meta={currentWalletMeta}
            pageItems={currentWalletData?.length}
            columns={currentWalletColumns}
            data={currentWalletData}
          />
        </Box>
        <Box sx={{ width: "50%" }}>
          <Typography sx={{ fontWeight: "bold" }}>List Transaksi</Typography>
          <DataTables
            // value={filterText}
            // searchOption={searchOption}
            // valueSearchBy={searchBy}
            // onChangeSearch={handleChangeSearch}
            // onChangeSearchBy={handleChangeSearchBy}
            onChange={onChangePageWalletTrx}
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
          onChange={onChangePageWalletCampaign}
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
          onChange={onChangePageWalletMerchant}
          pagination={true}
          meta={merchantPaymentListMeta}
          pageItems={merchantPaymentListData?.length}
          columns={merchantPaymentListColumns}
          data={merchantPaymentListData}
        />
      </Box> */}
    </Box>
  );
};

export default DataTableComponent;
