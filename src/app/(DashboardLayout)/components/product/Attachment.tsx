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

import img1 from "public/images/backgrounds/u1.jpg";
import img2 from "public/images/backgrounds/u3.jpg";
import { ModalPopupFilesDetail } from "../shared/ModalPopup";
import { useState } from "react";

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

type ChildProps = {
  data: {
    id: number;
    name: string;
    status: string;
    qty: string;
    note: string;
    images: [{ id: number; image_url: string }];
  };
};

const Attachment: React.FC<ChildProps> = ({ data }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [file, setFile] = useState("");

  const onView = (file: string) => {
    setIsOpen(true);
    setFile(file);
  };

  const onCloseView = () => {
    setIsOpen(false);
  };
  return (
    <>
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
              {data.images.map((product) => (
                <TableRow key={product.id}>
                  {/* <TableCell>
                    <Image
                      src={`${process.env.NEXT_PUBLIC_FILE}${product.image_url}`}
                      alt="NotFound"
                      width={150} // Set the desired width
                      height={60} // Set the desired height
                    />
                  </TableCell> */}
                  <TableCell>
                    <Stack spacing={1} direction="row">
                      <Button
                        onClick={() => onView(product.image_url)}
                        sx={{ padding: 0 }}
                        variant="contained"
                        size="medium"
                        color="primary"
                      >
                        <Image
                          src={`${process.env.NEXT_PUBLIC_FILE}${product.image_url}`}
                          alt="NotFound"
                          width={200} // Set the desired width
                          height={120} // Set the desired height
                        />
                      </Button>
                    </Stack>
                  </TableCell>
                </TableRow>
              ))}
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
