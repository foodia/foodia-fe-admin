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
          name: string;
          price: string;
          images: [{ image_url: string }];
        };
      }
    ];
    detonator: { oauth: { fullname: string; email: string } };
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

  const onView = (file: string) => {
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
                justifyContent: "space-between",
                border: "0.4px solid grey",
                borderRadius: "10px",
                padding: "10px",
              }}
            >
              <Image
                src={`${process.env.NEXT_PUBLIC_FILE}${orders.merchant_product.images[0].image_url}`}
                alt="NotFound"
                width={150} // Set the desired width
                height={60} // Set the desired height
              />
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
                    Rp. {orders.merchant_product.price}
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
                      backgroundColor: "success.main",
                      textTransform: "capitalize",
                    }}
                  >
                    {orders.order_status}
                  </Typography>
                  <Button
                    sx={{ width: "20px" }}
                    onClick={() =>
                      onView(orders.merchant_product.images[0].image_url)
                    }
                    variant="contained"
                    size="small"
                    color="info"
                  >
                    <IconEye size={20} /> View
                  </Button>
                </Box>
              </Box>
            </Box>
          ))}
        </Box>
      </BaseCard>
      <BaseCard title="Attachment">
        <TableContainer
          sx={{
            width: {
              xs: "274px",
              sm: "100%",
            },
          }}
        >
          <Table
            aria-label="simple table"
            sx={{
              whiteSpace: "nowrap",
            }}
          >
            <TableBody>
              {/* {products.map((product) => ( */}
              <TableRow>
                <TableCell>
                  <Image
                    src={`${process.env.NEXT_PUBLIC_FILE}${data.image_url}`}
                    alt="NotFound"
                    width={100} // Set the desired width
                    height={60} // Set the desired height
                  />
                </TableCell>
                <TableCell>
                  <Box display="flex" alignItems="center">
                    <Box>
                      <Typography variant="h6" fontWeight={500}>
                        {data.detonator.oauth.fullname}
                      </Typography>
                      <Typography color="textSecondary" fontSize="13px">
                        {data.detonator.oauth.email}
                      </Typography>
                    </Box>
                  </Box>
                </TableCell>
                <TableCell>
                  <Stack spacing={1} direction="row">
                    <Button
                      onClick={() => onView(data.image_url)}
                      variant="contained"
                      size="small"
                      color="info"
                    >
                      <IconEye size={20} /> View
                    </Button>
                  </Stack>
                </TableCell>
              </TableRow>
              {/* ))} */}
            </TableBody>
          </Table>
        </TableContainer>
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
