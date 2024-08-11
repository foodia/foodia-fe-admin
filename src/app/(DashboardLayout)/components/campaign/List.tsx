import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { getCampaign, getCampaignSummary } from "../api/Campaign";
import { useAppContext } from "../shared/Context";
import BaseCard from "../shared/DashboardCard";
import DataTableComponent from "./DataTable";
import Charts from "./Chart";

const List = () => {
  const { isLoading, setIsLoading } = useAppContext();
  const [data, setData] = useState<any>([]);
  const breadcrumbs = [
    <Typography fontSize="13px" key="3" color="#999" fontWeight={400}>
      Campaign List
    </Typography>,
  ];

  useEffect(() => {
    getCampaignSummary(setData, setIsLoading);
  }, []);

  const volunteerData = [
    {
      label: "Inactive Users",
      value: 326,
      color: "#6B4EFF",
    },
    {
      label: "Active Users",
      value: 450,
      color: "#3FB648",
    },
    {
      label: "",
      value: 212,
      color: "#000",
    },
  ];

  const oneTimeCampaignOptions: any = {
    series: [
      {
        name: "Review",
        data: [data.dana_mandiri?.review || 0],
        color: "#000000",
      },
      {
        name: "Invitation",
        data: [data.dana_mandiri?.review || 0],
        color: "#6B4EFF",
      },
      {
        name: "Rejected",
        data: [0, data.dana_mandiri?.canceled || 0],
        color: "#DE0606",
      },
      {
        name: "Fund",
        data: [0, 0, data.dana_mandiri?.fund || 0],
        color: "#1D5882",
      },
      {
        name: "Confirmation",
        data: [0, 0, data.dana_mandiri?.confirmation || 0],
        color: "#ed774b",
      },
      {
        name: "Process",
        data: [0, 0, data.dana_mandiri?.process || 0],
        color: "#FFB444",
      },
      {
        name: "Report",
        data: [0, 0, data.dana_mandiri?.report || 0],
        color: "#6CB28E",
      },
      {
        name: "Completed",
        data: [0, 0, data.dana_mandiri?.completed || 0],
        color: "#3FB648",
      },
    ],
    // series: [
    //   {
    //     data: [
    //       {
    //         x: "Waiting",
    //         y: 1,
    //       },
    //       {
    //         x: "Rejected",
    //         y: 18,
    //       },
    //       {
    //         x: "Approved",
    //         y: 13,
    //       },
    //     ],
    //   },
    // ],
    chart: {
      type: "bar",
      height: "250px",
      stacked: true,
    },
    plotOptions: {
      bar: {
        horizontal: true,
        dataLabels: {
          total: {
            enabled: false,
            offsetX: 0,
            style: {
              fontSize: "13px",
              fontWeight: 900,
            },
          },
        },
      },
    },
    stroke: {
      width: 1,
      colors: ["#fff"],
    },
    xaxis: {
      categories: ["Waiting", "Rejected", "Approved"],
      // labels: {
      //   formatter: function (val: any) {
      //     return val + "K";
      //   },
      // },
    },
    yaxis: [
      {
        axisBorder: {
          show: true,
          color: "#FF1654",
        },
      },
    ],
    // yaxis: {
    //   categories: [0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24],
    //   // title: {
    //   //   text: undefined,
    //   // },
    // },
    // tooltip: {
    //   y: {
    //     formatter: function (val: any) {
    //       return val + "K";
    //     },
    //   },
    // },
    fill: {
      opacity: 1,
    },
    legend: {
      show: false,
      horizontalAlign: "left",
      offsetX: 10,
    },
  };

  const regularCampaignOptions: any = {
    series: [
      {
        name: "Review",
        data: [data.dana_terbuka?.review || 0],
        color: "#000000",
      },
      {
        name: "Invitation",
        data: [data.dana_terbuka?.invitation || 0],
        color: "#6B4EFF",
      },
      {
        name: "Rejected",
        data: [0, data.dana_terbuka?.canceled || 0],
        color: "#DE0606",
      },
      {
        name: "Fund",
        data: [0, 0, data.dana_terbuka?.fund || 0],
        color: "#1D5882",
      },
      {
        name: "Confirmation",
        data: [0, 0, data.dana_terbuka?.confirmation || 0],
        color: "#ed774b",
      },
      {
        name: "Process",
        data: [0, 0, data.dana_terbuka?.process || 0],
        color: "#FFB444",
      },
      {
        name: "Report",
        data: [0, 0, data.dana_terbuka?.report || 0],
        color: "#6CB28E",
      },
      {
        name: "Completed",
        data: [0, 0, data.dana_terbuka?.completed || 0],
        color: "#3FB648",
      },
    ],
    // series: [
    //   {
    //     data: [
    //       {
    //         x: "Waiting",
    //         y: 1,
    //       },
    //       {
    //         x: "Rejected",
    //         y: 18,
    //       },
    //       {
    //         x: "Approved",
    //         y: 13,
    //       },
    //     ],
    //   },
    // ],
    chart: {
      type: "bar",
      height: "250px",
      stacked: true,
    },
    plotOptions: {
      bar: {
        horizontal: true,
        dataLabels: {
          total: {
            enabled: false,
            offsetX: 0,
            style: {
              fontSize: "13px",
              fontWeight: 900,
            },
          },
        },
      },
    },
    stroke: {
      width: 1,
      colors: ["#fff"],
    },
    xaxis: {
      categories: ["Waiting", "Rejected", "Approved"],
      // labels: {
      //   formatter: function (val: any) {
      //     return val + "K";
      //   },
      // },
    },
    yaxis: [
      {
        axisBorder: {
          show: true,
          color: "#FF1654",
        },
      },
    ],
    // yaxis: {
    //   categories: [0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24],
    //   // title: {
    //   //   text: undefined,
    //   // },
    // },
    // tooltip: {
    //   y: {
    //     formatter: function (val: any) {
    //       return val + "K";
    //     },
    //   },
    // },
    fill: {
      opacity: 1,
    },
    legend: {
      show: false,
      horizontalAlign: "left",
      offsetX: 10,
    },
  };

  return (
    <>
      <BaseCard
        title="List Campaign"
        breadcrumb={breadcrumbs}
        lastUpdate={"2024-03-14T16:56:04+07:00"}
      >
        <Box sx={{ paddingX: "30px" }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              width: "100%",
              gap: "10px",
            }}
          >
            <Box sx={{ width: "100%" }}>
              <Typography
                sx={{
                  fontWeight: "bold",
                  paddingTop: "15px",
                  fontSize: "20px",
                }}
              >
                Campaign Dana Terbuka
              </Typography>
              <Charts
                options={regularCampaignOptions}
                series={regularCampaignOptions.series as number[]}
                // label="Donator"
                width="90%"
                type="bar"
              />
            </Box>
            <hr />
            <Box sx={{ width: "100%" }}>
              <Typography
                sx={{
                  fontWeight: "bold",
                  paddingTop: "15px",
                  fontSize: "20px",
                }}
              >
                Campaign Dana Mandiri
              </Typography>
              <Charts
                options={oneTimeCampaignOptions}
                series={oneTimeCampaignOptions.series as number[]}
                // label="Donator"
                width="90%"
                type="bar"
              />
            </Box>
          </Box>
          <hr />
          <Typography
            sx={{ fontWeight: "bold", paddingTop: "15px", fontSize: "20px" }}
          >
            List Campaign
          </Typography>
          <DataTableComponent />
        </Box>
      </BaseCard>
    </>
  );
};

export default List;
