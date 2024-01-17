const CustomStylesTable = {
  table: {
    style: {
      maxWidth: "auto", // set the width of the table wrapper
      backgroundColor: "#FCFDFF",
      border: "1px solid #CCD1D9",
      borderRadius: "6px 6px 0px 0px",
    },
  },
  cells: {
    style: {
      paddingLeft: "20px", // override the cell padding for data cells
      justifyContent: "left",
      fontWeight: "bold",
    },
  },
  rows: {
    style: {
      backgroundColor: "#FCFDFF",
      // marginTop: "10px",
      // borderRadius: "10px",
      // border: "0px",
      minHeight: "72px", // override the row height
      "&:not(:last-of-type)": {
        // border: "0px",
      },
    },
  },
  denseStyle: {
    minHeight: "32px",
  },
  headRow: {
    style: {
      backgroundColor: "#FCFDFF",
      color: "black",
      minHeight: "52px",
      // borderRadius: "10px",
    },
    denseStyle: {
      minHeight: "32px",
    },
  },
  headCells: {
    style: {
      paddingLeft: "20px", // override the cell padding for head cells
      paddingRight: "10px",
      justifyContent: "left",
      color: "black",
    },
  },
  pagination: {
    style: {
      backgroundColor: "#FCFDFF",
      // borderTop: "none",
      // padding: "10px",
      border: "1px solid #CCD1D9",
      borderTop: "0px",
      justifyContent: "center",
      borderRadius: "0px 0px 6px 6px",
    },
    pageButtonsStyle: {
      borderRadius: "100%",
      border: "1px solid #CCD1D9",
      margin: "2px",
      color: "#007BFF",
      backgroundColor: "white",
    },
    activePageButtonStyle: {
      backgroundColor: "#007BFF",
      color: "white",
    },
    disabledPageButtonStyle: {
      color: "#ccc",
      cursor: "not-allowed",
    },
  },
};

export default CustomStylesTable;
