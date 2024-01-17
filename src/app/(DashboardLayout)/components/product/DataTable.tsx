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
  name: string;
  description: string;
  price: string;
  qty: number;
  status: string;
  merchant: { oauth: { fullname: string } };
}

interface Props {
  data: Data[];
}

const columns: TableColumn<Data>[] = [
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
    name: "Merchant",
    cell: (row: Data) => <div>{row.merchant.oauth.fullname}</div>,
    // sortable: true,
  },
  {
    name: "Name",
    cell: (row: Data) => <div>{row.name}</div>,
    // sortable: true,
  },
  {
    name: "Description",
    cell: (row: Data) => <div>{row.description}</div>,
    // sortable: true,
    width: "260px",
  },
  {
    name: "Quantity",
    cell: (row: Data) => <div>{row.qty}</div>,
    // sortable: true,
    width: "100px",
  },
  {
    name: "Price",
    cell: (row: Data) => (
      <div>Rp.{row.price.replace(/\B(?=(\d{3})+(?!\d))/g, ".")}</div>
    ),
    // sortable: true,
  },
  // {
  //   name: "Registered at",
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
            pathname: "/ui-components/product/info",
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
  const [searchBy, setSearchBy] = useState<string>("name");
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
        (searchBy === "name"
          ? data.name.toLowerCase().includes(searchText.toLowerCase())
          : searchBy === "price"
          ? data.price.toLowerCase().includes(searchText.toLowerCase())
          : data.description.toLowerCase().includes(searchText.toLowerCase()))
    );
  } else {
    filteredItems = data.filter(
      (data) =>
        data.status.toLowerCase() === "approved" &&
        (searchBy === "name"
          ? data.name.toLowerCase().includes(searchText.toLowerCase())
          : searchBy === "price"
          ? data.price.toLowerCase().includes(searchText.toLowerCase())
          : data.description.toLowerCase().includes(searchText.toLowerCase()))
    );
  }
  const searchOption = [
    {
      id: 1,
      value: "name",
      label: "Name",
    },
    {
      id: 2,
      value: "price",
      label: "Price",
    },
    {
      id: 3,
      value: "description",
      label: "Description",
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
        pageItems={filteredItems.length}
        totalItems={data.length}
        columns={columns}
        data={filteredItems}
      />
    </>
  );
};

export default DataTableComponent;
