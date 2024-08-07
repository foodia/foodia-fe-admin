import { SelectChangeEvent, Stack, Typography } from "@mui/material";
import moment from "moment";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useAppContext } from "../../shared/Context";
import DataTables from "../../shared/DataTables";
import { getCouponWalletTrx } from "../../api/Coupon";
import { ButtonAction, CouponStatus, Status } from "../../shared/Buttons";

interface Meta {
  page: number;
  per_page: number;
  page_count: number;
  total: number;
}

interface Data {
  id: number;
  amount: any;
  reserved_at: string;
  status: string;
  transaction_date: string;
  merchant: { merchant_name: string };
  merchant_product: { name: string; price: any };
  beneficiary: { fullname: string };
}

interface Props {
  data: Data[];
  meta: Meta;
  handleChangePage: any;
}

const DataTableComponent = () => {
  const [filterPeriode, setFilterPeriode] = useState<string>(
    moment().format("MMM YYYY")
  );
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

  const fetchCouponTrx = () => {
    getCouponWalletTrx(setData, setIsLoading);
  };

  useEffect(() => {
    fetchCouponTrx();
    setIsLoading(false);
  }, []);

  const columns = [
    {
      name: "No",
      selector: (_row: any, i: any) => i + 1 + currentPageIndex * meta.per_page,
      // sortable: true,
      width: "60px",
      // style: {
      //   paddingLeft: "30px",
      // },
    },
    {
      name: "Name",
      cell: (row: any) => <div>{row.beneficiary.fullname}</div>,
      // sortable: true,
      width: "120px",
    },
    {
      name: "Store",
      cell: (row: any) => <div>{row.merchant.merchant_name}</div>,
      // sortable: true,
      // width: "120px",
    },
    {
      name: "Menu",
      cell: (row: any) => <div>{row.merchant_product.name}</div>,
      // sortable: true,
      width: "140px",
    },
    {
      name: "Price",
      cell: (row: any) => (
        <div>
          {new Intl.NumberFormat("id-ID", {
            style: "currency",
            currency: "IDR",
            minimumFractionDigits: 0,
          }).format(row.amount || 0)}
        </div>
      ),
      // width: "100px",
      // sortable: true,
    },
    {
      name: "Status",
      cell: (row: any) => <CouponStatus row={row} />,
      // sortable: true,
      width: "110px",
    },
    {
      name: "Reserved Date",
      cell: (row: any) => (
        <div>{moment(row.reserved_at).format("DD/MM/YYYY hh:mm")}</div>
      ),
      // sortable: true,
    },
    {
      name: "Transaction Date",
      cell: (row: any) => (
        <div>{moment(row.transaction_date).format("DD/MM/YYYY hh:mm")}</div>
      ),
      // sortable: true,
    },
    {
      name: "Action",
      cell: (row: any) => (
        <Stack spacing={1} direction="row">
          <Link
            onClick={() => setIsLoading(true)}
            href={{
              pathname: "/ui-components/pages/wallet/coupon/info",
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
  ];

  const [month, setMonth] = useState(moment().format("YYYY-MM"));
  const [isOpenedMonthOptions, setIsOpenedMonthOptions] = useState(false);

  const onChangeMonth = (bulan: any) => {
    setMonth(bulan);
    // getHistory(bulan);
    setIsOpenedMonthOptions(!isOpenedMonthOptions);
  };

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
        onChangeMonth={onChangeMonth}
        // pageItems={data.length}
        month={month}
        isOpenedMonthOptions={isOpenedMonthOptions}
        setIsOpenedMonthOptions={setIsOpenedMonthOptions}
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
