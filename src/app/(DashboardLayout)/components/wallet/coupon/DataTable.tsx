import { SelectChangeEvent, Stack, Typography } from "@mui/material";
import moment from "moment";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useAppContext } from "../../shared/Context";
import DataTables from "../../shared/DataTables";

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
  handleChangePage: any;
}

const DataTableComponent = () => {
  const [filterPeriode, setFilterPeriode] = useState<string>("Jun 2024");
  const [searchBy, setSearchBy] = useState<string>("fullname");
  const [searchText, setSearchText] = useState<string>("");
  const [currentPageIndex, setCurrentPageIndex] = useState(0); // State to track current page index
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
    setIsLoading(false);
  }, []);

  const columns = [
    {
      name: "No",
      selector: (_row: any, i: any) => i + 1 + currentPageIndex * meta.per_page,
      // sortable: true,
      width: "70px",
      // style: {
      //   paddingLeft: "30px",
      // },
    },
    {
      name: "Fullname",
      cell: (row: any) => <div>{row.oauth.fullname}</div>,
      // sortable: true,
    },
    {
      name: "Email",
      cell: (row: any) => <div>{row.oauth.email}</div>,
      // sortable: true,
      width: "270px",
    },
    {
      name: "Phone number",
      cell: (row: any) => <div>{row.oauth.phone}</div>,
      // sortable: true,
    },
    {
      name: "Registered at",
      cell: (row: any) => (
        <div>{moment(row.created_at).format("DD/MM/YYYY")}</div>
      ),
      // sortable: true,
    },
    // {
    //   name: "Status",
    //   cell: (row: any) => <Status row={row} />,
    //   // sortable: true,
    // },
    // {
    //   name: "Action",
    //   cell: (row: any) => (
    //     <Stack spacing={1} direction="row">
    //       <Link
    //         href={{
    //           pathname: "/ui-components/pages/donator/info",
    //           query: {
    //             id: row.id,
    //           },
    //         }}
    //       >
    //         <ButtonAction label="View" />
    //       </Link>
    //     </Stack>
    //   ),
    // sortable: true,
    // },
    // Add more columns as needed
  ];

  const handleChangePage = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setPage(value);
    setCurrentPageIndex(value - 1);
    setIsLoading(true);
  };

  useEffect(() => {
    localStorage.setItem("SearchBy", searchBy);
    localStorage.setItem("SearchText", searchText);
  }, []);

  const handleChangeSearchBy = (event: SelectChangeEvent) => {
    setSearchBy(event.target.value);
    localStorage.setItem("SearchBy", event.target.value);
    setIsLoading(true);
  };

  const handleChangeFilterPeriode = (event: SelectChangeEvent) => {
    // setIsLoading(true);
    // localStorage.setItem("FilterStatus", event.target.value);
    setFilterPeriode(event.target.value);
  };

  const filterPeriodeOptions = [
    {
      id: 1,
      value: "Jun 2024",
      label: "Jun 2024",
    },
    // {
    //   id: 2,
    //   value: "rejected",
    //   label: "Rejected",
    // },
    // {
    //   id: 3,
    //   value: "approved",
    //   label: "Approved",
    // },
    // {
    //   id: 4,
    //   value: "all",
    //   label: "All",
    // },
  ];

  return (
    <>
      <Typography sx={{ fontWeight: "bold", fontSize: "20px" }}>
        List Coupon Transaction
      </Typography>
      <DataTables
        valueFilterPeriode={filterPeriode}
        filterPeriodeOption={filterPeriodeOptions}
        onChangeFilterPeriode={handleChangeFilterPeriode}
        download={true}
        searchable={false}
        filterPeriode={true}
        onChange={handleChangePage}
        pageItems={data.length}
        meta={meta}
        columns={columns}
        data={data}
        pagination={true}
        currentPageIndex={currentPageIndex}
      />
    </>
  );
};

export default DataTableComponent;
