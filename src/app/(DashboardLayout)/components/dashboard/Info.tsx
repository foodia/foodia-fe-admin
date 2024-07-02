import { Box, Typography } from "@mui/material";
import DetailCard from "../shared/DetailCard";
import DataTableComponent from "./DataTable";
import { useRouter, useSearchParams } from "next/navigation";

type ChildProps = {
  data: {
    id: number;
    name: string;
    price: any;
    status: string;
    qty: string;
    note: string;
    description: string;
    images: [{ id: number; image_url: string }];
  };
};

const Info: React.FC<ChildProps> = ({ data }) => {
  const searchParams = useSearchParams();

  console.log(searchParams.get("detail"));
  console.log(searchParams.get("month"));

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "start",
          gap: "10px",
          width: "100%",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <Typography sx={{ fontWeight: "bold", fontSize: "20px" }}>
            List{" "}
            {searchParams.get("detail") === "revenue"
              ? "Campaign Revenue"
              : "Cash In"}{" "}
            ({searchParams.get("month")} 2024)
          </Typography>
          <Box
            sx={{ display: "flex", flexDirection: "column", alignItems: "end" }}
          >
            <Typography sx={{ fontSize: "11px" }}>
              Total{" "}
              {searchParams.get("detail") === "revenue"
                ? "Campaign Revenue"
                : "Cash In"}{" "}
              {searchParams.get("month")} 2024
            </Typography>
            <Typography sx={{ fontWeight: "bold", fontSize: "20px" }}>
              Rp 2.000.000
            </Typography>
          </Box>
        </Box>
        <DataTableComponent />
        <br />
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <Typography sx={{ fontWeight: "bold", fontSize: "20px" }}>
            List{" "}
            {searchParams.get("detail") === "revenue"
              ? "Coupon Revenue"
              : "Cash Out"}{" "}
            ({searchParams.get("month")} 2024)
          </Typography>
          <Box
            sx={{ display: "flex", flexDirection: "column", alignItems: "end" }}
          >
            <Typography sx={{ fontSize: "11px" }}>
              Total{" "}
              {searchParams.get("detail") === "revenue"
                ? "Coupon Revenue"
                : "Cash Out"}{" "}
              {searchParams.get("month")} 2024
            </Typography>
            <Typography sx={{ fontWeight: "bold", fontSize: "20px" }}>
              Rp 2.000.000
            </Typography>
          </Box>
        </Box>
        <DataTableComponent />
      </Box>
      {/* <DetailCard title="Revenue"></DetailCard> */}
    </>
  );
};

export default Info;
