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
  corporate_name: string;
  description: string;
  address: string;
  status: string;
  created_at: string;
  oauth: { fullname: string; email: string; phone: string };
}

interface Props {
  data: Data[];
  meta: Meta;
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
    cell: (row: Data) => <Status row={row} />,
    // sortable: true,
  },
  {
    name: "Action",
    cell: (row: Data) => (
      <Stack spacing={1} direction="row">
        <Link
          href={{
            pathname: "/ui-components/pages/donator/info",
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

const DataTableComponent: React.FC<Props> = ({ data, meta }) => {
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
        (searchBy === "fullname"
          ? data.oauth.fullname.toLowerCase().includes(searchText.toLowerCase())
          : searchBy === "email"
          ? data.oauth.email.toLowerCase().includes(searchText.toLowerCase())
          : data.oauth.phone.toLowerCase().includes(searchText.toLowerCase()))
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
