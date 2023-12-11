import {
  Box,
  FormControl,
  Input,
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
import { AccountCircle, Search } from "@mui/icons-material";

interface Data {
  value?: any;
  onChange?: any;
  columns?: any;
  data?: any;
  onChangeSearch?: any;
}

const DataTables: React.FC<Data> = ({
  value,
  onChange,
  columns,
  data,
  onChangeSearch,
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
        <Box>
          <TextField
            size="small"
            id="outlined-basic"
            label="Search"
            variant="outlined"
            InputProps={{
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
