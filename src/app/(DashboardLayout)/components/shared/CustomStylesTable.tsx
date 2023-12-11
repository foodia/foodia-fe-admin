const CustomStylesTable = {
  table: {
    style: {
      width: "auto", // set the width of the table wrapper
      backgroundColor: "transparent",
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
      backgroundColor: "#D5D5D540",
      marginTop: "10px",
      borderRadius: "10px",
      border: "0px",
      minHeight: "72px", // override the row height
      "&:not(:last-of-type)": {
        border: "0px",
      },
    },
  },
  denseStyle: {
    minHeight: "32px",
  },
  headRow: {
    style: {
      backgroundColor: "green",
      minHeight: "52px",
      borderRadius: "10px",
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
      color: "rgb(243 241 241)",
    },
  },
  pagination: {
    style: {
      backgroundColor: "transparent",
      borderTop: "none",
      padding: "10px",
    },
    pageButtonsStyle: {
      borderRadius: "5px",
      border: "1px solid #ccc",
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
