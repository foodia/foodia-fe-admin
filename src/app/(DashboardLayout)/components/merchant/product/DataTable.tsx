import { Button, Chip, SelectChangeEvent, Stack } from "@mui/material";
import { IconEye } from "@tabler/icons-react";
import moment from "moment";
import Link from "next/link";
import React, { useState } from "react";
import DataTable, { TableColumn } from "react-data-table-component";
import CustomStylesTable from "../../shared/CustomStylesTable";
import DataTables from "../../shared/DataTables";

interface Data {
  id: number;
  status: string;
  name: string;
}

interface Props {
  data: Data[];
}

const columns: TableColumn<Data>[] = [
  {
    name: "ID",
    selector: (row: Data) => row.id,
    // sortable: true,
    width: "70px",
  },
  {
    name: "Menu",
    cell: (row: Data) => <div>{row.name}</div>,
    // sortable: true,
  },
  // {
  //   name: "Email",
  //   cell: (row: Data) => <div>{row.oauth.email}</div>,
  //   // sortable: true,
  //   width: "200px",
  // },
  // {
  //   name: "Phone number",
  //   cell: (row: Data) => <div>{row.oauth.phone}</div>,
  //   // sortable: true,
  // },
  // {
  //   name: "Register at",
  //   cell: (row: Data) => (
  //     <div>{moment(row.created_at).format("DD/MM/YYYY")}</div>
  //   ),
  //   // sortable: true,
  // },
  {
    name: "Status",
    cell: (row: Data) => (
      <Chip
        sx={{
          pl: "4px",
          pr: "4px",
          backgroundColor:
            row.status === "approved"
              ? "success.main"
              : row.status === "rejected"
              ? "error.main"
              : "warning.main",
          color: "#fff",
        }}
        size="small"
        label={row.status}
      />
    ),
    // sortable: true,
  },
  {
    name: "Action",
    cell: (row: Data) => (
      <Stack spacing={1} direction="row">
        <Link
          href={{
            pathname: "/ui-components/merchant/info",
            query: {
              id: row.id,
            },
          }}
        >
          <Button variant="contained" size="small" color="info">
            <IconEye size={20} /> View
          </Button>
        </Link>
      </Stack>
    ),
    width: "auto",
    // sortable: true,
  },
  // Add more columns as needed
];

const DataTableComponent: React.FC<Props> = ({ data }) => {
  const [filterText, setFilterText] = useState<string>("unapproved");

  const handleChange = (event: SelectChangeEvent) => {
    setFilterText(event.target.value);
  };

  let filteredItems: any;
  if (filterText === "unapproved") {
    filteredItems = data.filter(
      (data) =>
        data.status.toLowerCase().includes("waiting") ||
        data.status.toLowerCase().includes("rejected")
    );
  } else {
    filteredItems = data.filter((data) =>
      data.status.toLowerCase().includes(filterText.toLowerCase())
    );
  }
  return (
    <>
      <DataTables
        value={filterText}
        onChange={handleChange}
        columns={columns}
        data={filteredItems}
      />
    </>
  );
};

export default DataTableComponent;
