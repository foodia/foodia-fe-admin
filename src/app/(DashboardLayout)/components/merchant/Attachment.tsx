import React, { useState } from "react";
import {
  Typography,
  Box,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Chip,
  TableContainer,
  Stack,
  Button,
} from "@mui/material";
import BaseCard from "../shared/DashboardCard";
import { IconEye } from "@tabler/icons-react";
import Image from "next/image";

import img1 from "public/images/backgrounds/u1.jpg";
import img2 from "public/images/backgrounds/u3.jpg";
import { ModalPopupFilesDetail } from "../shared/ModalPopup";
import DetailCard from "../shared/DetailCard";
import ImageHandler from "../shared/ImageHandler";

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

  const onViewImage = (file: string) => {
    setIsOpen(true);
    setFile(file);
  };

  const onCloseView = () => {
    setIsOpen(false);
  };
  return (
    <>
      <DetailCard title="Merchant Documents">
        <Box sx={{ display: "flex", flexDirection: "row", gap: "10px" }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Button
              onClick={() => onViewImage(data.self_photo)}
              variant="contained"
              size="small"
              sx={{
                width: "210px",
                height: "125px",
                borderRadius: "10px",
                background: "transparent",
              }}
            >
              <ImageHandler url={data.self_photo} />
            </Button>
            <Typography>Self Photo</Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Button
              onClick={() => onViewImage(data.ktp_photo)}
              variant="contained"
              size="small"
              sx={{
                width: "210px",
                height: "125px",
                borderRadius: "10px",
                background: "transparent",
              }}
            >
              <ImageHandler url={data.ktp_photo} />
            </Button>
            <Typography>KTP Photo</Typography>
          </Box>
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

export default Attachment;
