import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { getCampaign } from "../api/Campaign";
import { useAppContext } from "../shared/Context";
import BaseCard from "../shared/DashboardCard";
import DataTableComponent from "./DataTable";
import Charts from "./Chart";

const List = () => {
  const breadcrumbs = [
    <Typography fontSize="13px" key="3" color="#999" fontWeight={400}>
      Campaign List
    </Typography>,
  ];

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

  const volunteeroptions: any = {
    series: [
      {
        name: "Marine Sprite",
        data: [3, 21, 24],
      },
      {
        name: "Striking Calf",
        data: [53, 32, 33],
      },
      {
        name: "Tank Picture",
        data: [12, 17, 11],
      },
      {
        name: "Bucket Slope",
        data: [9, 7, 5],
      },
      {
        name: "Reborn Kid",
        data: [25, 12, 19],
      },
    ],
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
                options={volunteeroptions}
                series={volunteeroptions.series as number[]}
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
                options={volunteeroptions}
                series={volunteeroptions.series as number[]}
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
