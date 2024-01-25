import { Button, Chip, SelectChangeEvent, Stack } from "@mui/material";
import { IconEye } from "@tabler/icons-react";
import moment from "moment";
import Link from "next/link";
import React, { useState } from "react";
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
  event_name: string;
  event_type: string;
  description: string;
  created_at: string;
  status: string;
  detonator: { id: number; oauth: { fullname: string } };
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
    name: "Detonator",
    cell: (row: Data) => <div>{row.detonator?.oauth?.fullname}</div>,
    // sortable: true,
    width: "auto",
  },
  {
    name: "Event Name",
    cell: (row: Data) => <div>{row.event_name}</div>,
    // sortable: true,
  },
  {
    name: "Event Type",
    cell: (row: Data) => <div>{row.event_type}</div>,
    // sortable: true,
    width: "auto",
  },
  // {
  //   name: "Description",
  //   cell: (row: Data) => <div>{row.description}</div>,
  //   // sortable: true,
  //   width: "200px",
  // },
  {
    name: "Submitted at",
    cell: (row: Data) => (
      <div>{moment(row.created_at).format("DD/MM/YYYY")}</div>
    ),
    // sortable: true,
  },
  {
    name: "Status",
    cell: (row: Data) => <Status row={row} />,
    width: "auto",
    // sortable: true,
  },
  {
    name: "Action",
    // selector: (row: Data) => row.age,
    cell: (row: Data) => (
      <Stack spacing={1} direction="row">
        <Link
          href={{
            pathname: "/ui-components/pages/campaign/info",
            query: {
              id: row.id,
            },
          }}
        >
          <ButtonAction />
        </Link>
      </Stack>
    ),
    // width: "auto",
    sortable: true,
  },
  // Add more columns as needed
];

const DataTableComponent: React.FC<Props> = ({ data, meta }) => {
  const [filterText, setFilterText] = useState<string>("unapproved");
  const [searchBy, setSearchBy] = useState<string>("detonator");
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
        (searchBy === "detonator"
          ? data.detonator.oauth.fullname
              .toLowerCase()
              .includes(searchText.toLowerCase())
          : searchBy === "name"
          ? data.event_name.toLowerCase().includes(searchText.toLowerCase())
          : data.event_type.toLowerCase().includes(searchText.toLowerCase()))
    );
  } else {
    filteredItems = data.filter(
      (data) =>
        data.status.toLowerCase() === "approved" &&
        (searchBy === "detonator"
          ? data.detonator.oauth.fullname
              .toLowerCase()
              .includes(searchText.toLowerCase())
          : searchBy === "name"
          ? data.event_name.toLowerCase().includes(searchText.toLowerCase())
          : data.event_type.toLowerCase().includes(searchText.toLowerCase()))
    );
  }

  const searchOption = [
    {
      id: 1,
      value: "detonator",
      label: "Detonator",
    },
    {
      id: 2,
      value: "name",
      label: "Event Name",
    },
    {
      id: 3,
      value: "type",
      label: "Event Type",
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
