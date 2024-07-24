import { Button, Chip } from "@mui/material";
import { IconEye } from "@tabler/icons-react";
import Link from "next/link";
import React from "react";

interface StatusProps {
  row: { status?: any; campaign_status?: any };
}

interface ButtonAction {
  query?: any;
  pathname?: any;
  label?: any;
  onClick?: any;
  disabled?: any;
}

export const ButtonAction: React.FC<ButtonAction> = ({
  query,
  pathname,
  label,
  onClick,
  disabled,
}) => {
  return (
    // <Link
    //   href={{
    //     pathname: {pathname},
    //     query: {query},
    //   }}
    // >
    <Button
      sx={{ backgroundColor: "#3FB648", width: "auto", borderRadius: "10px" }}
      variant="contained"
      size="small"
      color="info"
      onClick={onClick}
      disabled={disabled}
    >
      <IconEye size={20} />
      {label}
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

export const CouponStatus: React.FC<StatusProps> = ({ row }) => {
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
        width: "auto",
        fontSize: "11px",
        fontWeight: 600,
        borderRadius: "10px",
        height: "20px",
        bgcolor:
          row.status === "reserved"
            ? "#1D5882"
            : row.status === "expired"
            ? "#DE0606"
            : row.status === "active"
            ? "#6B4EFF"
            : row.status === "claimed"
            ? "#3FB648"
            : "",
        color: "white",
      }}
      size="small"
      label={row.status}
    />
    // </Link>
  );
};

export const ApprovalStatus: React.FC<StatusProps> = ({ row }) => {
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
        width: "auto",
        fontSize: "11px",
        fontWeight: 600,
        borderRadius: "10px",
        height: "20px",
        backgroundColor:
          row.status === "approved"
            ? "#1D5882"
            : row.status === "rejected"
            ? "#DE0606"
            : "#000000",
        color: "white",
      }}
      size="small"
      label={row.status}
    />
    // </Link>
  );
};

export const EventStatus: React.FC<StatusProps> = ({ row }) => {
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
        width: "auto",
        fontSize: "11px",
        fontWeight: 600,
        borderRadius: "10px",
        height: "20px",
        backgroundColor:
          row.campaign_status === "FINISHED"
            ? "#3FB648"
            : row.campaign_status === "OPEN"
            ? "#1D5882"
            : row.campaign_status === "INPROGRESS"
            ? "#FFB444"
            : row.campaign_status === "DRAFT"
            ? "#000000"
            : "",
        color: "white",
      }}
      size="small"
      label={row.campaign_status}
    />
    // </Link>
  );
};
