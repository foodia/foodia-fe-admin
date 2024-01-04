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

  const onViewImage = (file: string) => {
    setIsOpen(true);
    setFile(file);
  };

  const onCloseView = () => {
    setIsOpen(false);
  };
  return (
    <>
      <BaseCard title="Attachment">
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            gap: "10px",
          }}
        >
          {data.images.map((orders) => (
            <Button
              key={orders.id}
              onClick={() => onViewImage(orders.image_url)}
              variant="contained"
              size="small"
              sx={{
                backgroundColor: "transparent",
                border: "0.4px solid grey",
              }}
            >
              <Image
                src={`${process.env.NEXT_PUBLIC_FILE}${orders.image_url}`}
                alt="NotFound"
                width={200} // Set the desired width
                height={120} // Set the desired height
              />
            </Button>
          ))}
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
