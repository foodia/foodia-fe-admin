import { Button, Chip } from "@mui/material";
import { IconEye } from "@tabler/icons-react";
import Link from "next/link";
import React from "react";

interface StatusProps {
  row: { status: any };
}

export const ButtonAction = ({ query, pathname }: any) => {
  return (
    // <Link
    //   href={{
    //     pathname: {pathname},
    //     query: {query},
    //   }}
    // >
    <Button
      sx={{ backgroundColor: "#178B45" }}
      variant="contained"
      size="small"
      color="info"
    >
      <IconEye size={20} /> View
    </Button>
    // </Link>
  );
};

export const Status: React.FC<StatusProps> = ({ row }) => {
  return (
    // <Link
    //   href={{
    //     pathname: {pathname},
    //     query: {query},
    //   }}
    // >
    <Chip
      sx={{
        textTransform: "capitalize",
        width: "115px",
        fontSize: "14px",
        fontWeight: 600,
        borderRadius: "8px",
        height: "32px",
        backgroundColor:
          row.status === "approved"
            ? "#E9FBF0"
            : row.status === "rejected"
            ? "#FFF0F1"
            : "#FFF9EB",
        color:
          row.status === "approved"
            ? "#178D46"
            : row.status === "rejected"
            ? "#94000D"
            : "#AB6800",
      }}
      size="small"
      label={row.status}
    />
    // </Link>
  );
};
