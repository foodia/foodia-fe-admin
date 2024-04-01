import { Box, SelectChangeEvent, Typography } from "@mui/material";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { useAppContext } from "../shared/Context";
import DataTables from "../shared/DataTables";
import DetailCard from "../shared/DetailCard";

interface Meta {
  page: number;
  per_page: number;
  page_count: number;
  total: number;
}

interface Data {
  id: number;
  transaction: {
    sender_name: string;
    amount: number;
    transaction_type: string;
    transaction_date: string;
    transaction_status: string;
  };
}

interface Props {
  data: Data[];
  //   meta: Meta;
  //   handleChangePage: any;
}

const columns = [
  {
    name: "No",
    selector: (_row: any, i: any) => i + 1,
    width: "70px",
    // style: {
    //   paddingLeft: "30px",
    // },
  },
  {
    name: "Name",
    cell: (row: Data) => <div>{row.transaction.sender_name}</div>,
  },
  {
    name: "Amount",
    cell: (row: Data) => (
      <div>
        {new Intl.NumberFormat("id-ID", {
          style: "currency",
          currency: "IDR",
          minimumFractionDigits: 0,
        }).format(row.transaction.amount)}
      </div>
    ),
    width: "130px",
  },
  {
    name: "Transaction Date",
    cell: (row: Data) => (
      <div>
        {moment(row.transaction.transaction_date).format("DD-MM-YYYY hh:mm")}
      </div>
    ),
    width: "135px",
  },
];

const Donators: React.FC<Props> = ({ data }) => {
  const [searchText, setSearchText] = useState<string>("");
  const [page, setPage] = useState(1);
  const { isLoading, setIsLoading } = useAppContext();

  useEffect(() => {
    setIsLoading(false);
    localStorage.setItem("SearchText", searchText);
  }, []);

  const handleChangeSearch = (event: SelectChangeEvent) => {
    setSearchText(event.target.value);
    localStorage.setItem("SearchText", event.target.value);
  };

  let filteredItems: any;

  filteredItems = data?.filter((data) =>
    data?.transaction.sender_name
      .toLowerCase()
      .includes(searchText.toLowerCase())
  );

  const searchOption = [
    {
      id: 1,
      value: "name",
      label: "Product Name",
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
      <DetailCard title="Donators">
        <Box sx={{ width: "100%" }}>
          <Typography
            sx={{ display: "flex", justifyContent: "end", alignItems: "end" }}
          >
            {data.length} Total Donators
          </Typography>
          <DataTables
            // value={filterText}
            // searchOption={searchOption}
            // valueSearchBy={searchBy}
            // onChangeFilterText={handleChangeFilterText}
            // onKeyUpSearch={handleKeyUp}
            // filterText={filterOptions}
            // onChange={handleChangePage}
            download={false}
            onChangeSearch={handleChangeSearch}
            // onChangeSearchBy={handleChangeSearchBy}
            pageItems={data.length}
            // meta={meta}
            columns={columns}
            data={filteredItems}
            // pagination={true}
          />
        </Box>
      </DetailCard>
    </>
  );
};

export default Donators;
