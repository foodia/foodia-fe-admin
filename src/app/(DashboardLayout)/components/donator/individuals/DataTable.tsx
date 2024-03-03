import { Box, Button, Chip, SelectChangeEvent, Stack } from "@mui/material";
import { IconCircleCheck, IconEye } from "@tabler/icons-react";
import moment from "moment";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { TableColumn } from "react-data-table-component";
import DataTables from "../../shared/DataTables";
import { ButtonAction, Status } from "../../shared/Buttons";
import { getIndividual } from "../../api/Individual";

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
  fullname: string;
  email: string;
  phone: string;
  is_active: any;
  is_locked: any;
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
    name: "Fullname",
    cell: (row: Data) => <div>{row.fullname}</div>,
    // sortable: true,
  },
  {
    name: "Email",
    cell: (row: Data) => <div>{row.email}</div>,
    // sortable: true,
    width: "270px",
  },
  {
    name: "Phone number",
    cell: (row: Data) => <div>{row.phone}</div>,
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
    name: "Active",
    cell: (row: Data) => (
      <div>{row.is_active ? <IconCircleCheck color="green" /> : ""}</div>
    ),
    // sortable: true,
  },
  {
    name: "Locked",
    cell: (row: Data) => (
      <div>{row.is_locked ? <IconCircleCheck color="green" /> : ""}</div>
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
  const [filterText, setFilterText] = useState<any>(false);
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

  let filteredItems: any = data;
  if (filterText == false) {
    filteredItems = data.filter(
      (data) =>
        data.is_active == false &&
        (searchBy === "fullname"
          ? data.fullname.toLowerCase().includes(searchText.toLowerCase())
          : searchBy === "email"
          ? data.email.toLowerCase().includes(searchText.toLowerCase())
          : data.phone.toLowerCase().includes(searchText.toLowerCase()))
    );
  } else {
    filteredItems = data.filter(
      (data) =>
        data.is_active == true &&
        (searchBy === "fullname"
          ? data.fullname.toLowerCase().includes(searchText.toLowerCase())
          : searchBy === "email"
          ? data.email.toLowerCase().includes(searchText.toLowerCase())
          : data.phone.toLowerCase().includes(searchText.toLowerCase()))
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

  const filterOptions = [
    {
      id: 1,
      value: true,
      label: "Active",
    },
    {
      id: 2,
      value: false,
      label: "Un-Active",
    },
  ];

  return (
    <>
      <DataTables
        value={filterText}
        searchOption={searchOption}
        valueSearchBy={searchBy}
        onChange={handleChangePage}
        onChangeFilterText={handleChange}
        filterText={filterOptions}
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
