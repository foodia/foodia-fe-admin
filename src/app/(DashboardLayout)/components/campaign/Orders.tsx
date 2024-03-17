import { Box, Button, Typography } from "@mui/material";
import { IconEye } from "@tabler/icons-react";
import Image from "next/legacy/image";
import Link from "next/link";
import { useState } from "react";
import DetailCard from "../shared/DetailCard";
import { ModalPopupFilesDetail } from "../shared/ModalPopup";
import logo from "@/utils/notFound.png";
import ImageHandler from "../shared/ImageHandler";

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

const Orders: React.FC<ChildProps> = ({ data }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [file, setFile] = useState("");
  // const [errorOccurred, setErrorOccurred] = useState(false);

  // const handleImageError = () => {
  //   setErrorOccurred(true);
  // };

  // console.log("orderDoc", errorOccurred);

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
                variant="contained"
                sx={{
                  padding: 0,
                  width: "250px",
                  borderRadius: "10px",
                  backgroundColor: "transparent",
                }}
                onClick={() =>
                  onViewImage(orders.merchant_product.images[0].image_url)
                }
              >
                <ImageHandler
                  url={orders.merchant_product.images[0].image_url}
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
