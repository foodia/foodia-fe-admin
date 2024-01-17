import { Search } from "@mui/icons-material";
import {
  Box,
  FormControl,
  InputAdornment,
  InputLabel,
  MenuItem,
  Pagination,
  PaginationItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import DataTable from "react-data-table-component";
import CustomStylesTable from "./CustomStylesTable";
import ReactPaginate from "react-paginate";
import {
  IconArrowBack,
  IconArrowForward,
  IconArrowLeft,
  IconArrowRight,
  IconSignLeft,
  IconSignRight,
} from "@tabler/icons-react";

interface Data {
  value?: any;
  valueSearchBy?: any;
  onChange?: any;
  columns?: any;
  data?: any;
  onChangeSearch?: any;
  onChangeSearchBy?: any;
  pageItems?: any;
  totalItems?: any;
  searchOption?: { id?: number; value?: string; label?: string }[];
}

const DataTables: React.FC<Data> = ({
  value,
  valueSearchBy,
  onChange,
  columns,
  data,
  onChangeSearch,
  onChangeSearchBy,
  searchOption,
  pageItems,
  totalItems,
}) => {
  // const paginationOptions = {
  //   rowsPerPageText: "Rows per page:",
  //   rangeSeparatorText: "of",
  //   selectAllRowsItem: true,
  //   selectAllRowsItemText: "All",
  // };

  // const styles = `
  //       .pagination {
  //         display: flex;
  //         list-style: none;
  //         background-color: gray;
  //       }
  //       .pagination li {
  //         // display: inline-block;
  //         // margin-right: 5px;
  //         border-radius: 15px;
  //         background-color: transparent;
  //         // width: 20px;
  //         // text-align: center;
  //       }
  //       .pagination li.active {
  //           background-color: #8F0D1E;
  //       }
  //       .pagination li.disabled {
  //           opacity: 0.5;
  //           cursor: default;
  //       }
  //       .pagination li a {
  //         padding: 5px;
  //         cursor: pointer;
  //         color: black;
  //       }
  //       .pagination li.active a {
  //           cursor: pointer;
  //           color: #fff;
  //       }
  //       .pagination li.disabled a {
  //           cursor: not-allowed;
  //           color: grey;
  //       }
  //       // .pagination li:hover{
  //       //     background-color: #8F0D1E;
  //       // }
  //       // .pagination li:hover a{
  //       //     background-color: #8F0D1E;
  //       //     color: #fff;
  //       // }
  //       // .pagination li.disabled:hover{
  //       //     background-color: transparent;
  //       // }
  //       // .pagination li.disabled:hover a{
  //       //     background-color: transparent;
  //       //     color: grey;
  //       // }
  //       `;

  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          padding: "5px",
          alignItems: "center",
          gap: "10px",
        }}
      >
        {searchOption ? (
          <Box sx={{ display: "flex", flexDirection: "row" }}>
            <TextField
              size="small"
              placeholder="Search..."
              label="Search By"
              InputProps={{
                sx: {
                  paddingLeft: 0,
                  // Add other styling as needed
                },
                startAdornment: (
                  <FormControl
                    sx={{ minWidth: 138, marginRight: "10px" }}
                    size="small"
                  >
                    <Select
                      labelId="demo"
                      id="demo"
                      value={valueSearchBy}
                      label="Search By"
                      onChange={onChangeSearchBy}
                      sx={{
                        borderEndEndRadius: "0px",
                        borderTopRightRadius: "0px",
                      }}
                    >
                      {searchOption?.map((data) => (
                        <MenuItem key={data.id} value={data.value}>
                          {data.label}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                ),
                endAdornment: (
                  <InputAdornment position="end">
                    <Search />
                  </InputAdornment>
                ),
              }}
              onChange={onChangeSearch}
            />
          </Box>
        ) : (
          ""
        )}
        {/* <Typography>Filter : </Typography> */}
        {value ? (
          <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
            <InputLabel id="demo-select-small-label">Status Filter</InputLabel>
            <Select
              labelId="demo-select-small-label"
              id="demo-select-small"
              value={value}
              label="Status Filter"
              onChange={onChange}
            >
              {/* <MenuItem value="waiting">Waiting</MenuItem> */}
              <MenuItem value="approved">Approved</MenuItem>
              <MenuItem value="unapproved">Unapproved</MenuItem>
            </Select>
          </FormControl>
        ) : (
          ""
        )}
      </Box>
      <DataTable
        customStyles={CustomStylesTable}
        columns={columns}
        data={data}
        // pagination
        // paginationPerPage={1}
        // paginationRowsPerPageOptions={}
      />
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          // backgroundColor: "red",
          border: "1px solid #CCD1D9",
          padding: "10px",
        }}
      >
        <Typography sx={{ fontSize: "13px" }}>
          Show 1 to {pageItems ? pageItems : 0} of {totalItems ? totalItems : 0}{" "}
          results
        </Typography>
        <Box>
          <Pagination
            style={{
              backgroundColor: "gray",
              borderRadius: "40px",
              padding: "4px",
              background: "var(--UI-Neutral-Neutral-30, #F5F6FA)",
            }}
            count={data.per_page}
            defaultPage={1}
            siblingCount={0}
            boundaryCount={1}
            variant="outlined"
            shape="rounded"
            renderItem={(item) => (
              <PaginationItem
                slots={{ previous: IconArrowLeft, next: IconArrowRight }}
                {...item}
              />
            )}
            sx={{
              "& .MuiPaginationItem-previousNext": {
                color: "white",
                backgroundColor: "primary.main", // Customize the background color of the ul element
                // padding: "8px", // Add padding to the ul element for spacing
                borderRadius: "100%", // Optional: Customize the border radius of the ul element
              },
              "& .MuiPaginationItem-root": {
                borderRadius: "40px",
                "&.Mui-selected": {
                  borderColor: "primary.main",
                  backgroundColor: "transparent", // Customize the background color of the selected pagination item
                  color: "primary.main", // Customize the text color of the selected pagination item
                },
              },
            }}
          />
        </Box>
      </Box>
    </>
  );
};

export default DataTables;
