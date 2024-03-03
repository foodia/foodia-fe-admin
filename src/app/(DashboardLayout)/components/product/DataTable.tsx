import { Button, Stack, Chip, SelectChangeEvent } from "@mui/material";
import { IconEye } from "@tabler/icons-react";
import moment from "moment";
import Link from "next/link";
import React, { useState } from "react";
import DataTable, { TableColumn } from "react-data-table-component";
import CustomStylesTable from "../shared/CustomStylesTable";
import DataTables from "../shared/DataTables";
import { ButtonAction, Status } from "../shared/Buttons";

interface Meta {
  page: number;
  per_page: number;
  page_count: number;
  total: number;
}

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
  meta: Meta;
  handleChangePage: any;
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
      <div>
        {new Intl.NumberFormat("id-ID", {
          style: "currency",
          currency: "IDR",
          minimumFractionDigits: 0,
        }).format(parseInt(row.price))}
      </div>
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
    cell: (row: Data) => <Status row={row} />,
    // sortable: true,
  },
  {
    name: "Action",
    cell: (row: Data) => (
      <Stack spacing={1} direction="row">
        <Link
          href={{
            pathname: "/ui-components/pages/product/info",
            query: {
              id: row.id,
            },
          }}
        >
          <ButtonAction label="View" />
        </Link>
      </Stack>
    ),
    // sortable: true,
  },
  // Add more columns as needed
];

const DataTableComponent: React.FC<Props> = ({
  data,
  meta,
  handleChangePage,
}) => {
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

  const filterOptions = [
    {
      id: 1,
      value: "unapproved",
      label: "Unapproved",
    },
    {
      id: 2,
      value: "approved",
      label: "Approved",
    },
  ];

  return (
    <>
      <DataTables
        value={filterText}
        searchOption={searchOption}
        valueSearchBy={searchBy}
        onChangeFilterText={handleChange}
        filterText={filterOptions}
        onChange={handleChangePage}
        onChangeSearch={handleChangeSearch}
        onChangeSearchBy={handleChangeSearchBy}
        pageItems={filteredItems.length}
        meta={meta}
        columns={columns}
        data={filteredItems}
        pagination={true}
      />
    </>
  );
};

export default DataTableComponent;
