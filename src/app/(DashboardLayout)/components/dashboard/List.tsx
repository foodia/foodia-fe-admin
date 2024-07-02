import { Box, Typography, colors } from "@mui/material";
import BaseCard from "../shared/DashboardCard";
import Charts from "./Chart";
import { useRouter } from "next/navigation";
import { useAppContext } from "../shared/Context";

const List = () => {
  const router = useRouter();
  const { isLoading, setIsLoading } = useAppContext();
  const breadcrumbs = [
    <Typography fontSize="13px" key="3" color="#999" fontWeight={400}>
      Dashboard
    </Typography>,
  ];

  const cards = [
    {
      id: 1,
      title: "Revenue Balance",
      amount: "Rp 20.455.000",
      bgcolor: "linear-gradient(to bottom, #4ACB47, #5A9A70)",
    },
    {
      id: 2,
      title: "Agnostic Balance",
      amount: "Rp 3.500.000",
      bgcolor: "linear-gradient(to bottom, #47CBC3, #5A689A)",
    },
    {
      id: 3,
      title: "Coupon Balance",
      amount: "Rp 2.000.000",
      bgcolor: "linear-gradient(to bottom, #FF4949, #FFBC5B)",
    },
    {
      id: 4,
      title: "Merchant Balance",
      amount: "Rp 562.000.000",
      bgcolor: "linear-gradient(to bottom, #CB4747, #9A5A5A)",
    },
  ];

  const usersData = [
    {
      label: "Active Users",
      value: 719,
      color: "#3FB648",
    },
    {
      label: "New Users",
      value: 883,
      color: "#000",
    },
  ];

  const usersoptions: any = {
    series: usersData.map((item) => item.value), // Use the values for the series data
    labels: usersData.map((item) => item.label),
    chart: {
      type: "donut",
      stacked: false,
    },
    colors: usersData.map((item) => item.color),
    dataLabels: {
      enabled: true,
      formatter: function (val: any, opts: any) {
        const data = usersData[opts.seriesIndex];
        return `${data.value} ${data.label}`; // Use Unicode for newline
      },
      style: {
        fontSize: "12px",
        fontWeight: "bold",
        colors: ["black"], // This will apply to all data labels
      },
      dropShadow: {
        enabled: false,
      },
    },
    legend: {
      show: false,
      horizontalAlign: "left",
      offsetX: 10,
    },
    plotOptions: {
      pie: {
        startAngle: 0,
        endAngle: 360,
        customScale: 0.8,
        donut: {
          size: "60px",
        },
        dataLabels: {
          offset: 45, // Move labels further outside the slices
          minAngleToShowLabel: 10, // Only show labels for slices that have an angle larger than this value
        },
      },
    },
  };

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
    series: volunteerData.map((item) => item.value), // Use the values for the series data
    labels: volunteerData.map((item) => item.label),
    chart: {
      type: "donut",
      stacked: false,
    },
    colors: volunteerData.map((item) => item.color),
    dataLabels: {
      enabled: true,
      textAnchor: "start",
      formatter: function (val: any, opts: any) {
        const data = volunteerData[opts.seriesIndex];
        return `${data.value} ${data.label}`;
      },
      style: {
        fontSize: "12px",
        fontWeight: "bold",
        colors: ["black"], // This will apply to all data labels
      },
      dropShadow: {
        enabled: false,
      },
    },
    legend: {
      show: false,
      horizontalAlign: "left",
      offsetX: 10,
    },
    plotOptions: {
      pie: {
        customScale: 0.8,
        donut: {
          labels: {
            show: false,
          },
          size: "60px",
        },
        dataLabels: {
          offset: 45, // Move labels further outside the slices
          minAngleToShowLabel: 10, // Only show labels for slices that have an angle larger than this value
        },
      },
    },
  };

  const merchantData = [
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

  const merchantoptions: any = {
    series: merchantData.map((item) => item.value), // Use the values for the series data
    labels: merchantData.map((item) => item.label),
    chart: {
      type: "donut",
      stacked: false,
    },
    colors: merchantData.map((item) => item.color),
    dataLabels: {
      enabled: true,
      formatter: function (val: any, opts: any) {
        const data = merchantData[opts.seriesIndex];
        return `${data.value} ${data.label}`;
      },
      style: {
        fontSize: "12px",
        fontWeight: "bold",
        colors: ["black"], // This will apply to all data labels
      },
      dropShadow: {
        enabled: false,
      },
    },
    legend: {
      show: false,
      horizontalAlign: "left",
      offsetX: 10,
    },
    plotOptions: {
      pie: {
        customScale: 0.8,
        donut: {
          labels: {
            show: false,
          },
          size: "60px",
        },
        dataLabels: {
          offset: 45, // Move labels further outside the slices
          minAngleToShowLabel: 10, // Only show labels for slices that have an angle larger than this value
        },
      },
    },
  };

  // =------------------------=

  const revenueData = [
    {
      name: "Foods",
      data: [100, 250, 300, 215, 250, 310, 280, 250, 325, 215, 250, 310],
    },
  ];

  const revenueoptions: any = {
    series: revenueData,
    chart: {
      height: 350,
      type: "line",
      stacked: false,
      events: {
        dataPointMouseEnter: function (event: any) {
          event.target.style.cursor = "pointer";
        },
        markerClick: function (
          e: any,
          chartContext: any,
          { dataPointIndex, w }: any
        ) {
          const category = w?.globals?.categoryLabels[dataPointIndex];
          setIsLoading(true);
          router.push(
            `/ui-components/pages/dashboard/info?detail=revenue&month=${category}`
          );
        },
      },
    },
    dataLabels: {
      enabled: false,
    },
    colors: ["#3FB648"],
    stroke: {
      curve: "straight",
      width: [4],
    },
    xaxis: {
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "July",
        "Aug",
        "Sept",
        "Oct",
        "Nov",
        "Dec",
      ],
    },
    yaxis: [
      {
        // axisTicks: {
        //   show: true,
        // },
        axisBorder: {
          show: true,
          color: "#3FB648",
        },
        // labels: {
        //   style: {
        //     colors: "#FF1654",
        //   },
        // },
        // title: {
        //   style: {
        //     color: "#FF1654",
        //   },
        // },
      },
    ],
    markers: {
      onClick: function (e: any) {
        setIsLoading(true);
        router.push("/ui-components/pages/dashboard/info?detail=revenue");
        // do something on marker click
      },
      size: 5,
    },
    tooltip: {
      shared: false,
      intersect: true,
      x: {
        show: false,
      },
    },
    legend: {
      show: false,
      horizontalAlign: "left",
      offsetX: 40,
    },
  };

  const cashflowData = [
    {
      name: "Cash In",
      data: [255, 390, 300, 350, 390, 180, 355, 390, 300, 350, 390, 180],
    },
    {
      name: "Cash Out",
      data: [100, 250, 300, 215, 250, 310, 280, 250, 325, 215, 250, 310],
    },
  ];

  const cashflowoptions: any = {
    series: cashflowData,
    chart: {
      height: 350,
      type: "line",
      stacked: false,
      events: {
        dataPointMouseEnter: function (event: any) {
          event.target.style.cursor = "pointer";
        },
        markerClick: function (
          e: any,
          chartContext: any,
          { dataPointIndex, w }: any
        ) {
          // Get the category based on the dataPointIndex
          const category = w?.globals?.categoryLabels[dataPointIndex];

          // Log the category to the console
          console.log("Clicked category:", category);

          // You can also use this category in your router or any other action
          setIsLoading(true);
          router.push(
            `/ui-components/pages/dashboard/info?detail=cashflow&month=${category}`
          );
        },
      },
    },
    dataLabels: {
      enabled: false,
    },
    colors: ["#FF1654", "#3FB648"],
    stroke: {
      width: [4, 4],
    },
    xaxis: {
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "July",
        "Aug",
        "Sept",
        "Oct",
        "Nov",
        "Dec",
      ],
    },
    yaxis: [
      {
        axisBorder: {
          show: true,
          color: "#FF1654",
        },
      },
    ],
    markers: {
      // onClick: function (
      //   e: any,
      //   chartContext: any,
      //   { dataPointIndex, w }: any
      // ) {
      //   // Get the category based on the dataPointIndex
      //   const category = w.globals.labels[dataPointIndex];

      //   // Log the category to the console
      //   console.log("Clicked category:", category);

      //   // You can also use this category in your router or any other action
      //   setIsLoading(true);
      //   router.push(
      //     `/ui-components/pages/dashboard/info?detail=cashflow&month=${category}`
      //   );
      // },
      size: 5,
    },
    tooltip: {
      shared: false,
      intersect: true,
      x: {
        show: false,
      },
    },
    legend: {
      show: false,
      horizontalAlign: "left",
      offsetX: 40,
    },
  };

  return (
    <>
      <BaseCard title="Dashboard" breadcrumb={breadcrumbs}>
        <Box sx={{ paddingX: "10px" }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              paddingBottom: "30px",
            }}
          >
            <Typography sx={{ fontWeight: "bold", fontSize: "20px" }}>
              Wallet
            </Typography>
            <Box
              sx={{
                display: "flex",
                alignItems: "end",
                flexDirection: "column",
              }}
            >
              <Typography sx={{ fontSize: "14px" }}>Total Balance</Typography>
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
                  width: "260px",
                  display: "flex",
                  flexDirection: "column",
                  background: `${items.bgcolor}`,
                }}
              >
                <Typography
                  sx={{ fontSize: "14px", fontWeight: "bold", color: "white" }}
                >
                  {items.title}
                </Typography>
                <Typography
                  sx={{ fontSize: "22px", fontWeight: "bold", color: "white" }}
                >
                  {items.amount}
                </Typography>
              </Box>
            ))}
          </Box>
          <Charts
            options={revenueoptions}
            series={revenueoptions.series}
            label="Revenue"
            type="area"
          />
          <Charts
            options={cashflowoptions}
            series={cashflowoptions.series}
            label="Cash Flow"
            type="line"
          />
          <hr />
          <Typography
            sx={{ fontWeight: "bold", paddingTop: "15px", fontSize: "20px" }}
          >
            Users
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              paddingTop: "25px",
            }}
          >
            <Box>
              <Typography
                sx={{
                  fontStyle: "italic",
                  fontSize: "15px",
                  paddingLeft: "30px",
                }}
              >
                Donator
              </Typography>
              <Charts
                options={usersoptions}
                series={usersoptions.series as number[]}
                // label="Donator"
                width="90%"
                type="donut"
              />
            </Box>
            <Box>
              <Typography
                sx={{
                  fontStyle: "italic",
                  fontSize: "15px",
                  paddingLeft: "30px",
                }}
              >
                Volunteer
              </Typography>
              <Charts
                options={volunteeroptions}
                series={volunteeroptions.series as number[]}
                // label="Donator"
                width="90%"
                type="donut"
              />
            </Box>
            <Box>
              <Typography
                sx={{
                  fontStyle: "italic",
                  fontSize: "15px",
                  paddingLeft: "30px",
                }}
              >
                Merchant
              </Typography>
              <Charts
                options={merchantoptions}
                series={merchantoptions.series as number[]}
                // label="Donator"
                width="90%"
                type="donut"
              />
            </Box>
            <Box>
              <Typography
                sx={{
                  fontStyle: "italic",
                  fontSize: "15px",
                  paddingLeft: "30px",
                }}
              >
                Beneficiaries
              </Typography>
              <Charts
                options={volunteeroptions}
                series={volunteeroptions.series as number[]}
                // label="Donator"
                width="90%"
                type="donut"
              />
            </Box>
          </Box>
        </Box>
      </BaseCard>
    </>
  );
};

export default List;
