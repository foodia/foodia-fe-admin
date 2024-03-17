import { Button, Chip, SelectChangeEvent, Stack } from "@mui/material";
import { IconEye } from "@tabler/icons-react";
import moment from "moment";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { TableColumn } from "react-data-table-component";
import DataTables from "../shared/DataTables";
import { ButtonAction, Status } from "../shared/Buttons";
import { useAppContext } from "../shared/Context";
import { getCampaign } from "../api/Campaign";

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

const columns = [
  {
    name: "No",
    selector: (_row: any, i: any) => i + 1,
    // sortable: true,
    width: "70px",
    // style: {
    //   paddingLeft: "30px",
    // },
  },
  {
    name: "Detonator",
    cell: (row: any) => <div>{row.detonator?.oauth?.fullname}</div>,
    // sortable: true,
    width: "auto",
  },
  {
    name: "Event Name",
    cell: (row: any) => <div>{row.event_name}</div>,
    // sortable: true,
  },
  {
    name: "Event Status",
    cell: (row: any) => <div>{row.campaign_status}</div>,
    // sortable: true,
    width: "auto",
  },
  {
    name: "Target",
    cell: (row: any) => (
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
    cell: (row: any) => (
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
  // {
  //   name: "Submitted at",
  //   cell: (row: any) => (
  //     <div>{moment(row.created_at).format("DD/MM/YYYY")}</div>
  //   ),
  //   // sortable: true,
  // },
  {
    name: "Status",
    cell: (row: any) => <Status row={row} />,
    width: "auto",
    // sortable: true,
  },
  {
    name: "Action",
    // selector: (row: any) => row.age,
    cell: (row: any) => (
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

const DataTableComponent = () => {
  const [filterText, setFilterText] = useState<string>("waiting");
  const [searchBy, setSearchBy] = useState<string>("detonator_name");
  const [searchText, setSearchText] = useState<string>("");
  const [data, setData] = useState([]);
  const [meta, setMeta] = useState({
    page: 0,
    per_page: 0,
    page_count: 0,
    total: 0,
  });
  const [page, setPage] = useState(1);
  const { isLoading, setIsLoading } = useAppContext();
  const [typingTimeout, setTypingTimeout] = useState<
    NodeJS.Timeout | undefined
  >(undefined);

  useEffect(() => {
    localStorage.setItem("FilterStatus", filterText);
    getCampaign(setData, setMeta, page, setIsLoading);
  }, []);

  const handleChangePage = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setPage(value);
    setIsLoading(true);
    getCampaign(setData, setMeta, value, setIsLoading);
  };

  useEffect(() => {
    localStorage.setItem("SearchBy", searchBy);
    localStorage.setItem("SearchText", searchText);
  }, []);

  const handleChangeSearchBy = (event: SelectChangeEvent) => {
    setSearchBy(event.target.value);
    localStorage.setItem("SearchBy", event.target.value);
    setIsLoading(true);
    getCampaign(setData, setMeta, page, setIsLoading);
  };

  const handleChangeFilterText = (event: SelectChangeEvent) => {
    setFilterText(event.target.value);
    localStorage.setItem("FilterStatus", event.target.value);
    setIsLoading(true);
    getCampaign(setData, setMeta, page, setIsLoading);
  };

  const handleChangeSearch = (event: SelectChangeEvent) => {
    setSearchText(event.target.value);
    localStorage.setItem("SearchText", event.target.value);
    setPage(1);
  };

  const handleKeyUp = () => {
    if (typingTimeout) {
      clearTimeout(typingTimeout);
    }
    const timeout = setTimeout(() => {
      setIsLoading(true);
      getCampaign(setData, setMeta, page, setIsLoading);
      // Add your logic here
    }, 500); // Adjust the delay as needed (in milliseconds)
    setTypingTimeout(timeout);
  };

  // let filteredItems: any;
  // if (filterText === "unapproved") {
  //   filteredItems = data.filter(
  //     (data) =>
  //       data.status.toLowerCase() !== "approved" &&
  //       (searchBy === "detonator"
  //         ? data.detonator.oauth.fullname
  //             .toLowerCase()
  //             .includes(searchText.toLowerCase())
  //         : searchBy === "name"
  //         ? data.event_name.toLowerCase().includes(searchText.toLowerCase())
  //         : data.event_type.toLowerCase().includes(searchText.toLowerCase()))
  //   );
  // } else {
  //   filteredItems = data.filter(
  //     (data) =>
  //       data.status.toLowerCase() === "approved" &&
  //       (searchBy === "detonator"
  //         ? data.detonator.oauth.fullname
  //             .toLowerCase()
  //             .includes(searchText.toLowerCase())
  //         : searchBy === "name"
  //         ? data.event_name.toLowerCase().includes(searchText.toLowerCase())
  //         : data.event_type.toLowerCase().includes(searchText.toLowerCase()))
  //   );
  // }

  const searchOption = [
    {
      id: 1,
      value: "detonator_name",
      label: "Detonator",
    },
    {
      id: 2,
      value: "event_name",
      label: "Event Name",
    },
    {
      id: 3,
      value: "event_type",
      label: "Event Type",
    },
    {
      id: 4,
      value: "campaign_status",
      label: "Event Status",
    },
  ];

  const filterOptions = [
    {
      id: 1,
      value: "waiting",
      label: "Waiting",
    },
    {
      id: 2,
      value: "rejected",
      label: "Rejected",
    },
    {
      id: 3,
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
        onKeyUpSearch={handleKeyUp}
        onChange={handleChangePage}
        onChangeSearch={handleChangeSearch}
        onChangeSearchBy={handleChangeSearchBy}
        pageItems={data.length}
        meta={meta}
        columns={columns}
        data={data}
        pagination={true}
      />
    </>
  );
};

export default DataTableComponent;
