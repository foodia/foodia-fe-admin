import { Box, SelectChangeEvent, Typography } from "@mui/material";
import React, { useState } from "react";
import { TableColumn } from "react-data-table-component";
import DataTables from "../../shared/DataTables";
import Link from "next/link";
import { ButtonAction } from "../../shared/Buttons";

interface Meta {
  page: number;
  per_page: number;
  page_count: number;
  total: number;
}

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
  merchantPaymentListData: MerchantPaymentListData[];
  merchantPaymentListMeta: Meta;
  onChangePageWalletMerchant: any;
}

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
      <Box>
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
      </Box>
    </Box>
  );
};

export default DataTableComponent;
