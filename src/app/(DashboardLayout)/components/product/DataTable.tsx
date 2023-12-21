import { Button, Stack, Chip, SelectChangeEvent } from "@mui/material";
import { IconEye } from "@tabler/icons-react";
import moment from "moment";
import Link from "next/link";
import React, { useState } from "react";
import DataTable, { TableColumn } from "react-data-table-component";
import CustomStylesTable from "../shared/CustomStylesTable";
import DataTables from "../shared/DataTables";

interface Data {
  id: number;
  status: string;
  created_at: string;
  oauth: { fullname: string; email: string; phone: string };
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
    name: "Fullname",
    cell: (row: Data) => <div>{row.oauth.fullname}</div>,
    // sortable: true,
  },
  {
    name: "Email",
    cell: (row: Data) => <div>{row.oauth.email}</div>,
    // sortable: true,
    width: "270px",
  },
  {
    name: "Phone number",
    cell: (row: Data) => <div>{row.oauth.phone}</div>,
    // sortable: true,
  },
  {
    name: "Registered at",
    cell: (row: Data) => (
      <div>{moment(row.created_at).format("DD/MM/YYYY")}</div>
    ),
    // sortable: true,
  },
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
            pathname: "/ui-components/detonator/info",
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
    // sortable: true,
  },
  // Add more columns as needed
];

const DataTableComponent: React.FC<Props> = ({ data }) => {
  const [filterText, setFilterText] = useState<string>("unapproved");
  const [searchBy, setSearchBy] = useState<string>("fullname");
  const [searchText, setSearchText] = useState<string>("");

  const handleChangeSearchBy = (event: SelectChangeEvent) => {
    setSearchBy(event.target.value);
  };

  const handleChange = (event: SelectChangeEvent) => {
    setFilterText(event.target.value);
  };

  const handleChangeSearch = (event: SelectChangeEvent) => {
    setSearchText(event.target.value);
  };

  let filteredItems: any;
  if (filterText === "unapproved") {
    filteredItems = data.filter(
      (data) =>
        data.status.toLowerCase() !== "approved" &&
        (searchBy === "fullname"
          ? data.oauth.fullname.toLowerCase().includes(searchText.toLowerCase())
          : searchBy === "email"
          ? data.oauth.email.toLowerCase().includes(searchText.toLowerCase())
          : data.oauth.phone.toLowerCase().includes(searchText.toLowerCase()))
    );
  } else {
    filteredItems = data.filter(
      (data) =>
        data.status.toLowerCase() === "approved" &&
        data.oauth.fullname.toLowerCase().includes(searchText.toLowerCase())
    );
  }
  const searchOption = [
    {
      id: 1,
      value: "fullname",
      label: "FullName",
    },
    {
      id: 2,
      value: "email",
      label: "Email",
    },
    {
      id: 3,
      value: "phone",
      label: "Phone Number",
    },
  ];

  return (
    <>
      <DataTables
        value={filterText}
        searchOption={searchOption}
        valueSearchBy={searchBy}
        onChange={handleChange}
        onChangeSearch={handleChangeSearch}
        onChangeSearchBy={handleChangeSearchBy}
        columns={columns}
        data={filteredItems}
      />
    </>
  );
};

export default DataTableComponent;
