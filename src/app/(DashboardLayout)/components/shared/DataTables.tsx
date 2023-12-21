import { Search } from "@mui/icons-material";
import {
  Box,
  FormControl,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import DataTable from "react-data-table-component";
import CustomStylesTable from "./CustomStylesTable";

interface Data {
  value?: any;
  valueSearchBy?: any;
  onChange?: any;
  columns?: any;
  data?: any;
  onChangeSearch?: any;
  onChangeSearchBy?: any;
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
}) => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          padding: "10px",
          alignItems: "center",
          gap: "10px",
        }}
      >
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
        {/* <Typography>Filter : </Typography> */}
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
      </Box>
      <DataTable
        customStyles={CustomStylesTable}
        columns={columns}
        data={data}
        pagination
      />
    </>
  );
};

export default DataTables;
