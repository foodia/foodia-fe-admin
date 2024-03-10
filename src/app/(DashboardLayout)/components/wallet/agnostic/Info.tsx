import { Box, Button, Typography } from "@mui/material";
import DashboardCard from "../../shared/DashboardCard";
import DataTables from "../../shared/DataTables";
import React, { useEffect, useState } from "react";
import { TableColumn } from "react-data-table-component";
import { useRouter, useSearchParams } from "next/navigation";
import { useAppContext } from "../../shared/Context";

interface Details {
  donation_by: string;
  amount: number;
}

interface Props {
  data: Details[];
}
const breadcrumbs = [
  <Button
    key={0}
    sx={{
      p: 0,
      fontSize: "13px",
      color: "#000",
      fontWeight: 400,
      ":hover": { color: "blue" },
    }}
    href="/ui-components/pages/wallet/agnostic"
  >
    Agnostic Wallet
  </Button>,
  <Typography fontSize="13px" key={1} color="#999" fontWeight={400}>
    Campaign Donation Details
  </Typography>,
];

const columns: TableColumn<Props>[] = [
  {
    name: "No",
    selector: (_row: any, i: any) => i + 1,
    // sortable: true,
    width: "auto",
    // style: {
    //   paddingLeft: "30px",
    // },
  },
  {
    name: "Donation By",
    cell: (row: any) => <div>{row.donation_by}</div>,
    // sortable: true,
    width: "auto",
  },
  {
    name: "Amount",
    cell: (row: any) => (
      <div>
        {new Intl.NumberFormat("id-ID", {
          style: "currency",
          currency: "IDR",
          minimumFractionDigits: 0,
        }).format(row.amount)}
      </div>
    ),
    // sortable: true,
    width: "auto",
  },
  // Add more columns as needed
];

const Info: React.FC<Props> = ({ data }) => {
  const [meta, setMeta] = useState();
  const [page, setPage] = useState(1);
  const router = useRouter();

  console.log(data);

  return (
    <>
      <DashboardCard
        title="Depok Jumat Berkah"
        currentBalance={100000}
        breadcrumb={breadcrumbs}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            gap: "20px",
            justifyContent: "space-between",
          }}
        >
          <Box sx={{ width: "100%" }}>
            <DataTables pagination={true} columns={columns} data={data} />
          </Box>
        </Box>
      </DashboardCard>
    </>
  );
};

export default Info;
