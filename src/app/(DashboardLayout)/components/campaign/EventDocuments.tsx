import { Button } from "@mui/material";
import { useState } from "react";
import DetailCard from "../shared/DetailCard";
import Images from "../shared/Images";
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
          <Images url={`${process.env.NEXT_PUBLIC_FILE}${data.image_url}`} />
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
