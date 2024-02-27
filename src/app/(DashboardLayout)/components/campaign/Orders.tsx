import {
  Box,
  Button,
  Grid,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Typography,
} from "@mui/material";
import { IconEye, IconPhone } from "@tabler/icons-react";
import Image from "next/image";
import BaseCard from "../shared/DashboardCard";

import { useState } from "react";
import { ModalPopupFilesDetail } from "../shared/ModalPopup";
import Link from "next/link";
import DetailCard from "../shared/DetailCard";

interface ChildProps {
  data: {
    image_url: string;
    orders: [
      {
        id: number;
        order_status: string;
        qty: string;
        merchant: { oauth: { fullname: string } };
        merchant_product: {
          id: number;
          name: string;
          price: any;
          images: [{ image_url: string }];
        };
      }
    ];
    detonator: {
      id: number;
      status: string;
      self_photo: string;
      oauth: { fullname: string; email: string; phone: string };
    };
  };
}

// const products = [
//   {
//     id: "1",
//     name: "Selfi.jpg",
//     post: "2 MB",
//     pname: "Elite Admin",
//     priority: "Low",
//     pbg: "primary.main",
//     budget: "3.9",
//     img: img1,
//   },
//   {
//     id: "2",
//     name: "KTP.jpg",
//     post: "1 MB",
//     pname: "Real Homes WP Theme",
//     priority: "Medium",
//     pbg: "secondary.main",
//     budget: "24.5",
//     img: img2,
//   },
// ];

const Orders: React.FC<ChildProps> = ({ data }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [file, setFile] = useState("");

  const onViewImage = (file: string) => {
    setIsOpen(true);
    setFile(file);
    console.log(file);
  };

  const onCloseView = () => {
    setIsOpen(false);
  };

  return (
    <>
      <DetailCard title="Orders">
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            gap: "10px",
            width: "100%",
          }}
        >
          {data?.orders?.map((orders) => (
            <Box
              key={orders.id}
              sx={{
                display: "flex",
                gap: "10px",
                // justifyContent: "space-between",
                // border: "0.4px solid grey",
                boxShadow: "0px 0px 12px 0px rgba(0, 0, 0, 0.08)",
                borderRadius: "10px",
                padding: "10px",
                // width: "530px",
              }}
            >
              <Button
                sx={{
                  width: "210px",
                  height: "125px",
                  borderRadius: "10px",
                }}
                onClick={() =>
                  onViewImage(orders.merchant_product.images[0].image_url)
                }
                variant="contained"
                size="small"
                color="primary"
              >
                <Image
                  style={{ borderRadius: "10px" }}
                  onClick={() =>
                    onViewImage(orders.merchant_product.images[0].image_url)
                  }
                  src={`${process.env.NEXT_PUBLIC_FILE}${orders.merchant_product.images[0].image_url}`}
                  alt="NotFound"
                  layout="fill"
                />
              </Button>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  width: "100%",
                  justifyContent: "space-between",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    flexDirection: "column",
                    width: "50%",
                  }}
                >
                  <Typography
                    sx={{
                      marginBottom: "10px",
                      fontSize: "16px",
                      fontWeight: 600,
                    }}
                  >
                    {orders.merchant_product.name}
                  </Typography>
                  <Typography sx={{ fontSize: "12px" }}>
                    {orders.merchant.oauth.fullname}
                  </Typography>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                      marginBottom: "10px",
                    }}
                  >
                    <Typography sx={{ fontSize: "12px" }}>
                      {new Intl.NumberFormat("id-ID", {
                        style: "currency",
                        currency: "IDR",
                        minimumFractionDigits: 0,
                      }).format(orders.merchant_product.price)}
                    </Typography>
                    <Typography sx={{ fontSize: "12px" }}>
                      Quantity: {orders.qty}
                    </Typography>
                  </Box>
                  <Link
                    href={{
                      pathname: "/ui-components/pages/product/info",
                      query: {
                        id: orders.merchant_product.id,
                      },
                    }}
                  >
                    <Button variant="contained" size="small" color="info">
                      <IconEye size={20} /> View
                    </Button>
                  </Link>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "end",
                    justifyContent: "space-between",
                  }}
                >
                  <Typography
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    borderRadius="30px"
                    height="25px"
                    padding="5px 15px"
                    color="white"
                    sx={{
                      backgroundColor: `${
                        orders.order_status === "incoming"
                          ? "warning.main"
                          : orders.order_status === "canceled"
                          ? "error.main"
                          : "success.main"
                      }`,
                      textTransform: "capitalize",
                    }}
                  >
                    {orders.order_status}
                  </Typography>
                </Box>
              </Box>
            </Box>
          ))}
        </Box>
      </DetailCard>
      <ModalPopupFilesDetail
        open={isOpen}
        image_url={file}
        handleClose={onCloseView}
      />
    </>
  );
};

export default Orders;