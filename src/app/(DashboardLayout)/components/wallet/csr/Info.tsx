import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { TableColumn } from "react-data-table-component";
import DashboardCard from "../../shared/DashboardCard";
import DataTables from "../../shared/DataTables";

interface Details {
  donation_by: string;
  amount: number;
}

interface Props {
  data: Details[];
}

const breadcrumbs = [
  <Button
    sx={{
      p: 0,
      fontSize: "13px",
      color: "#000",
      fontWeight: 400,
      ":hover": { color: "blue" },
    }}
    href="/ui-components/pages/wallet/csr"
  >
    CSR Wallet
  </Button>,
  <Typography fontSize="13px" key="2" color="#999" fontWeight={400}>
    Campaign Donation Details
  </Typography>,
];

const columns: TableColumn<Details>[] = [
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
    cell: (row: Details) => <div>{row.donation_by}</div>,
    // sortable: true,
    width: "auto",
  },
  {
    name: "Amount",
    cell: (row: Details) => <div>{row.amount}</div>,
    // sortable: true,
    width: "auto",
  },
  // Add more columns as needed
];

const Info: React.FC<Props> = ({ data }) => {
  return (
    <>
      <DashboardCard title="Campaign Donation Detail" breadcrumb={breadcrumbs}>
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
