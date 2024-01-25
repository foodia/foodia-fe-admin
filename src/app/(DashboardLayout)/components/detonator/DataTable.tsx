import { Button, Chip, SelectChangeEvent, Stack } from "@mui/material";
import { IconEye } from "@tabler/icons-react";
import moment from "moment";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { TableColumn } from "react-data-table-component";
import DataTables from "../shared/DataTables";
import { ButtonAction } from "../shared/Buttons";

interface Meta {
  page: number;
  per_page: number;
  page_count: number;
  total: number;
}

interface Data {
  id: number;
  status: string;
  created_at: string;
  oauth: { fullname: string; email: string; phone: string };
  meta: {
    page: number;
    per_page: number;
    page_count: number;
    total: number;
  };
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
    cell: (row: Data) => (
      <Chip
        sx={{
          textTransform: "capitalize",
          width: "115px",
          fontSize: "14px",
          fontWeight: 600,
          borderRadius: "8px",
          height: "32px",
          backgroundColor:
            row.status === "approved"
              ? "#E9FBF0"
              : row.status === "rejected"
              ? "#FFF0F1"
              : "#FFF9EB",
          color:
            row.status === "approved"
              ? "#178D46"
              : row.status === "rejected"
              ? "#94000D"
              : "#AB6800",
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
      <Link
        href={{
          pathname: "/ui-components/pages/detonator/info",
          query: {
            id: row.id,
          },
        }}
      >
        <ButtonAction />
      </Link>
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
