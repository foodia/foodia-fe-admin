import {
  Box,
  Button,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Typography,
} from "@mui/material";
import { IconEye } from "@tabler/icons-react";
import Image from "next/image";
import BaseCard from "../shared/DashboardCard";

import { useState } from "react";
import { ModalPopupFilesDetail } from "../shared/ModalPopup";
import Link from "next/link";

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
          price: string;
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

const Attachment: React.FC<ChildProps> = ({ data }) => {
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
      <BaseCard title="Orders">
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            gap: "10px",
          }}
        >
          {data?.orders?.map((orders) => (
            <Box
              key={orders.id}
              sx={{
                display: "flex",
                gap: "10px",
                // justifyContent: "space-between",
                border: "0.4px solid grey",
                borderRadius: "10px",
                padding: "10px",
              }}
            >
              <Button
                // sx={{ width: "20px" }}
                onClick={() =>
                  onViewImage(orders.merchant_product.images[0].image_url)
                }
                variant="contained"
                size="small"
                color="primary"
              >
                <Image
                  src={`${process.env.NEXT_PUBLIC_FILE}${orders.merchant_product.images[0].image_url}`}
                  alt="NotFound"
                  width={150} // Set the desired width
                  height={60} // Set the desired height
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
                <Box>
                  <Typography>{orders.merchant_product.name}</Typography>
                  <Typography sx={{ fontSize: "12px" }}>
                    {orders.merchant.oauth.fullname}
                  </Typography>
                  <Typography sx={{ fontSize: "12px" }}>
                    Rp.{" "}
                    {orders.merchant_product.price.replace(
                      /\B(?=(\d{3})+(?!\d))/g,
                      "."
                    )}
                  </Typography>
                  <Typography sx={{ fontSize: "12px" }}>
                    Quantity: {orders.qty}
                  </Typography>
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
              </Box>
            </Box>
          ))}
        </Box>
      </BaseCard>
      <BaseCard title="Attachment">
        <Box sx={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <Typography>Event Photo :</Typography>
          <Button
            onClick={() => onViewImage(data.image_url)}
            variant="contained"
            size="small"
            sx={{ backgroundColor: "transparent", border: "0.4px solid grey" }}
          >
            <Image
              src={`${process.env.NEXT_PUBLIC_FILE}${data.image_url}`}
              alt="NotFound"
              width={200} // Set the desired width
              height={120} // Set the desired height
            />
          </Button>
          <Typography>Detonator :</Typography>
          <Box
            sx={{
              display: "flex",
              gap: "10px",
              border: "0.4px solid grey",
              borderRadius: "10px",
              padding: "10px",
            }}
          >
            <Button
              onClick={() => onViewImage(data.detonator.self_photo)}
              variant="contained"
              size="small"
              color="primary"
            >
              <Image
                src={`${process.env.NEXT_PUBLIC_FILE}${data.detonator.self_photo}`}
                alt="NotFound"
                width={100} // Set the desired width
                height={60} // Set the desired height
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
              <Box>
                <Typography variant="h6" fontWeight={500}>
                  {data.detonator.oauth.fullname}
                </Typography>
                <Typography color="textSecondary" fontSize="13px">
                  {data.detonator.oauth.phone}
                </Typography>
                <Typography color="textSecondary" fontSize="13px">
                  {data.detonator.oauth.email}
                </Typography>
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
                      data.detonator.status === "waiting"
                        ? "warning.main"
                        : data.detonator.status === "rejected"
                        ? "error.main"
                        : "success.main"
                    }`,
                    textTransform: "capitalize",
                  }}
                >
                  {data.detonator.status}
                </Typography>
                <Link
                  href={{
                    pathname: "/ui-components/pages/detonator/info",
                    query: {
                      id: data.detonator.id,
                    },
                  }}
                >
                  <Button variant="contained" size="small" color="info">
                    <IconEye size={20} /> View
                  </Button>
                </Link>
              </Box>
            </Box>
          </Box>
        </Box>
      </BaseCard>
      <ModalPopupFilesDetail
        open={isOpen}
        image_url={file}
        handleClose={onCloseView}
      />
    </>
  );
};

export default Attachment;
