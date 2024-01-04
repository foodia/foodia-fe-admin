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
        <Box sx={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <Typography>Self Photo :</Typography>
          <Button
            onClick={() => onViewImage(data.self_photo)}
            variant="contained"
            size="small"
            sx={{ backgroundColor: "transparent", border: "0.4px solid grey" }}
          >
            <Image
              src={`${process.env.NEXT_PUBLIC_FILE}${data.self_photo}`}
              alt="NotFound"
              width={200} // Set the desired width
              height={120} // Set the desired height
            />
          </Button>
          <Typography>KTP Photo :</Typography>
          <Button
            onClick={() => onViewImage(data.ktp_photo)}
            variant="contained"
            size="small"
            sx={{ backgroundColor: "transparent", border: "0.4px solid grey" }}
          >
            <Image
              src={`${process.env.NEXT_PUBLIC_FILE}${data.ktp_photo}`}
              alt="NotFound"
              width={200} // Set the desired width
              height={120} // Set the desired height
            />
          </Button>
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
