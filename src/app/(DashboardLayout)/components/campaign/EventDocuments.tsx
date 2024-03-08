import { Button } from "@mui/material";
import Image from "next/image";
import { useState } from "react";
import DetailCard from "../shared/DetailCard";
import { ModalPopupFilesDetail } from "../shared/ModalPopup";
import logo from "../../../../utils/notFound.png";
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

const Attachment: React.FC<ChildProps> = ({ data }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [file, setFile] = useState("");
  // const [errorOccurred, setErrorOccurred] = useState(false);

  // const handleImageError = () => {
  //   setErrorOccurred(true);
  // };

  // console.log("eventDoc", errorOccurred);

  const onViewImage = (file: string) => {
    setIsOpen(true);
    setFile(file);
  };

  const onCloseView = () => {
    setIsOpen(false);
  };

  return (
    <>
      <DetailCard title="Event Documents" subTitle="Event Photo">
        <Button
          onClick={() => onViewImage(data.image_url)}
          variant="contained"
          size="small"
          sx={{ width: "210px", height: "125px", borderRadius: "10px" }}
        >
          <ImageHandler url={data.image_url} />
        </Button>
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
