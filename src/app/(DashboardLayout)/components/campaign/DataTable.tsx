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
  donation_target: number;
  donation_collected: number;
  created_at: string;
  status: string;
  detonator: { id: number; oauth: { fullname: string } };
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
    width: "100px",
  },
  {
    name: "Target",
    cell: (row: Data) => (
      <div>
        {new Intl.NumberFormat("id-ID", {
          style: "currency",
          currency: "IDR",
          minimumFractionDigits: 0,
        }).format(row.donation_target)}
      </div>
    ),
    // sortable: true,
    width: "auto",
  },
  {
    name: "Collected",
    cell: (row: Data) => (
      <div>
        {new Intl.NumberFormat("id-ID", {
          style: "currency",
          currency: "IDR",
          minimumFractionDigits: 0,
        }).format(row.donation_collected)}
      </div>
    ),
    // sortable: true,
    width: "auto",
  },
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
          <ButtonAction label="View" />
        </Link>
      </Stack>
    ),
    // width: "auto",
    sortable: true,
  },
  // Add more columns as needed
];

const DataTableComponent: React.FC<Props> = ({
  data,
  meta,
  handleChangePage,
}) => {
  const [filterText, setFilterText] = useState<string>("unapproved");
  const [searchBy, setSearchBy] = useState<string>("detonator");
  const [searchText, setSearchText] = useState<string>("");

  const handleChangeSearchBy = (event: SelectChangeEvent) => {
    setSearchBy(event.target.value);
  };

  const handleChangeFilterText = (event: SelectChangeEvent) => {
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
        onChangeFilterText={handleChangeFilterText}
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
