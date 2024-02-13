import { Box, Stack, TextField, Typography } from "@mui/material";
import DashboardCard from "../../shared/DashboardCard";
import DataTables from "../../shared/DataTables";
import { TableColumn } from "react-data-table-component";
import Link from "next/link";
import { ButtonAction } from "../../shared/Buttons";

type ChildProps = {
  data: {
    id: number;
    name: string;
    price: string;
    status: string;
    qty: string;
    note: string;
    description: string;
    images: [{ id: number; image_url: string }];
  };
  onChangePageTransactionList?: any;
};

const campaignListColumns = [
  {
    name: "No",
    selector: (_row: any, i: any) => i + 1,
    // sortable: true,
    width: "70px",
    // style: {
    //   paddingLeft: "30px",
    // },
  },
  {
    name: "Nama Campaign",
    cell: (row: any) => (
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
    cell: (row: any) => (
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
    cell: (row: any) => (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          paddingTop: "10px",
          paddingBottom: "10px",
        }}
      >
        {row.details?.map((value: any, i: any) => (
          <div key={value.id} style={{ display: "flex", flexDirection: "row" }}>
            {/* {i === 1 && value.donation_by.length > 10
              ? `${value.donation_by.slice(0, 10)}...`
              : value.donation_by} */}
            {value.donation_by}
            {i + 1 !== row.details.length && (
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
    cell: (row: any) => (
      <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        {row.details?.map((value: any, i: any) => (
          <div key={value.id} style={{ display: "flex", flexDirection: "row" }}>
            {new Intl.NumberFormat("id-ID", {
              style: "currency",
              currency: "IDR",
              minimumFractionDigits: 0,
            }).format(value.amount)}
            {i + 1 !== row.details.length && (
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
    cell: (row: any) => (
      <Link
        href={{
          pathname: "/ui-components/pages/wallet/agnostic/info",
          query: {
            // id: row.id,
          },
        }}
      >
        <ButtonAction />
      </Link>
    ),
    // sortable: true,
  },
];

const Info: React.FC<ChildProps> = ({ data, onChangePageTransactionList }) => {
  return (
    <>
      <DashboardCard title="Product Info" status={data.status}>
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
              columns={campaignListColumns}
              // meta={transactionListMeta}
              // pageItems={transactionListData.length}
              // data={transactionListData}
            />
          </Box>
        </Box>
      </DashboardCard>
    </>
  );
};

export default Info;
