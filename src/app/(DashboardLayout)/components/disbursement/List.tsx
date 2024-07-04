import { Box, Typography } from "@mui/material";
import DashboardCard from "../shared/DashboardCard";
import DataTableComponent from "./DataTable";

const List = () => {
  const breadcrumbs = [
    <Typography fontSize="13px" key="3" color="#999" fontWeight={400}>
      Dashboard
    </Typography>,
  ];

  const cards = [
    {
      id: 1,
      title: "Waiting",
      amount: "Rp 20.455.000",
      borderColor: "#FFB444",
    },
    {
      id: 2,
      title: "Rejected",
      amount: "Rp 3.500.000",
      borderColor: "#DE0606",
    },
    {
      id: 3,
      title: "Approved",
      amount: "Rp 2.000.000",
      borderColor: "#3FB648",
    },
  ];

  return (
    <>
      <DashboardCard
        title="Dashboard"
        breadcrumb={breadcrumbs}
        lastUpdate={"2024-03-14T16:56:04+07:00"}
      >
        <Box sx={{ paddingX: "30px" }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              paddingBottom: "10px",
            }}
          >
            <Typography sx={{ fontWeight: "bold", fontSize: "20px" }}>
              Withdrawal
            </Typography>
            <Box
              sx={{
                display: "flex",
                alignItems: "end",
                flexDirection: "column",
              }}
            >
              <Typography sx={{ fontSize: "14px" }}>
                Merchant Balance
              </Typography>
              <Typography sx={{ fontWeight: "bold", fontSize: "20px" }}>
                Rp 584.955.000
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              marginBottom: "20px",
              gap: "7px",
            }}
          >
            {cards.map((items) => (
              <Box
                key={items.id}
                sx={{
                  padding: "15px",
                  borderRadius: "10px",
                  width: "240px",
                  display: "flex",
                  flexDirection: "column",
                  border: `1px solid ${items.borderColor}`,
                }}
              >
                <Typography
                  sx={{
                    fontSize: "14px",
                    fontWeight: "bold",
                    color: items.borderColor,
                  }}
                >
                  {items.title}
                </Typography>
                <Typography
                  sx={{
                    fontSize: "22px",
                    fontWeight: "bold",
                    color: items.borderColor,
                  }}
                >
                  {items.amount}
                </Typography>
              </Box>
            ))}
          </Box>
          <hr style={{ marginTop: "30px", marginBottom: "20px" }} />
          <DataTableComponent />
        </Box>
      </DashboardCard>
    </>
  );
};

export default List;
