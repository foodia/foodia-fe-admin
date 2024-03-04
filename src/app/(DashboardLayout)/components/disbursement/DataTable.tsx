import { Button, Chip, SelectChangeEvent, Stack } from "@mui/material";
import { IconEye } from "@tabler/icons-react";
import moment from "moment";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { TableColumn } from "react-data-table-component";
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
  recipient_name: any;
  bank: any;
  amount: any;
  merchant: { merchant_name: any };
  status: string;
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
    name: "Merchant Name",
    cell: (row: Data) => <div>{row.merchant.merchant_name}</div>,
    // sortable: true,
  },
  {
    name: "Recipient Name",
    cell: (row: Data) => <div>{row.recipient_name}</div>,
    // sortable: true,
    width: "auto",
  },
  {
    name: "Bank",
    cell: (row: Data) => <div>{row.bank}</div>,
    // sortable: true,
  },
  {
    name: "Amount",
    cell: (row: Data) => (
      <div>
        {new Intl.NumberFormat("id-ID", {
          style: "currency",
          currency: "IDR",
          minimumFractionDigits: 0,
        }).format(row.amount)}
      </div>
    ),
    // sortable: true,
  },
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
            pathname: "/ui-components/pages/disbursement/info",
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
  const [searchBy, setSearchBy] = useState<string>("merchant_name");
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

  let filteredItems: any = data;
  if (filterText === "unapproved") {
    filteredItems = data.filter(
      (data) =>
        data.status.toLowerCase() !== "approved" &&
        (searchBy === "merchant_name"
          ? data.merchant.merchant_name
              .toLowerCase()
              .includes(searchText.toLowerCase())
          : searchBy === "recipient_name"
          ? data.recipient_name.toLowerCase().includes(searchText.toLowerCase())
          : searchBy === "bank"
          ? data.bank.toLowerCase().includes(searchText.toLowerCase())
          : data.amount.toLowerCase().includes(searchText.toLowerCase()))
    );
  } else {
    filteredItems = data.filter(
      (data) =>
        data.status.toLowerCase() === "approved" &&
        (searchBy === "merchant_name"
          ? data.merchant.merchant_name
              .toLowerCase()
              .includes(searchText.toLowerCase())
          : searchBy === "recipient_name"
          ? data.recipient_name.toLowerCase().includes(searchText.toLowerCase())
          : searchBy === "bank"
          ? data.bank.toLowerCase().includes(searchText.toLowerCase())
          : data.amount.toLowerCase().includes(searchText.toLowerCase()))
    );
  }

  const searchOption = [
    {
      id: 1,
      value: "merchant_name",
      label: "Merchant Name",
    },
    {
      id: 2,
      value: "recipient_name",
      label: "Recipient Name",
    },
    {
      id: 3,
      value: "bank",
      label: "Bank",
    },
    {
      id: 4,
      value: "amount",
      label: "Amount",
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
