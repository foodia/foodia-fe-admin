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
import BaseCard from "../shared/DashboardCard";

import { useState } from "react";
import { ModalPopupFilesDetail } from "../shared/ModalPopup";
import Image from "next/image";

interface ChildProps {
  data: {
    self_photo: string;
    ktp_photo: string;
    ktp_number: string;
    oauth: { fullname: string; email: string; phone: string };
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
              {/* {products.map((product) => ( */}
              <TableRow>
                <TableCell>
                  <Image
                    src={`${process.env.NEXT_PUBLIC_FILE}${data.self_photo}`}
                    alt="NotFound"
                    width={150} // Set the desired width
                    height={60} // Set the desired height
                  />
                  {/* <img
                    src={process.env.NEXT_PUBLIC_FILE + data.self_photo}
                    alt="notFound"
                    style={{
                      width: "100px",
                      height: "50px",
                      borderRadius: "5px",
                    }}
                  /> */}
                </TableCell>
                <TableCell>
                  <Box display="flex" alignItems="center">
                    <Box>
                      <Typography variant="h6" fontWeight={500}>
                        {data.oauth.fullname}
                      </Typography>
                      <Typography color="textSecondary" fontSize="13px">
                        {data.oauth.email}
                      </Typography>
                    </Box>
                  </Box>
                </TableCell>
                <TableCell>
                  <Stack spacing={1} direction="row">
                    <Button
                      onClick={() => onView(data.self_photo)}
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
            <TableBody>
              {/* {products.map((product) => ( */}
              <TableRow>
                <TableCell>
                  <Image
                    src={`${process.env.NEXT_PUBLIC_FILE}${data.self_photo}`}
                    alt="NotFound"
                    width={150} // Set the desired width
                    height={60} // Set the desired height
                  />
                  {/* <img
                    src={process.env.NEXT_PUBLIC_FILE + data.ktp_photo}
                    alt="notFound"
                    style={{
                      width: "100px",
                      height: "50px",
                      borderRadius: "5px",
                    }}
                  /> */}
                </TableCell>
                <TableCell>
                  <Box display="flex" alignItems="center">
                    <Box>
                      <Typography variant="h6" fontWeight={500}>
                        {data.ktp_number}
                      </Typography>
                      <Typography color="textSecondary" fontSize="13px">
                        {data.oauth.email}
                      </Typography>
                    </Box>
                  </Box>
                </TableCell>
                <TableCell>
                  <Stack spacing={1} direction="row">
                    <Button
                      onClick={() => onView(data.ktp_photo)}
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
