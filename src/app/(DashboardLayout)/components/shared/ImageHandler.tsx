import logo from "@/utils/notFound.png";
import { Box, CircularProgress, Typography } from "@mui/material";
import axios from "axios";
import Image from "next/legacy/image";
import { useEffect, useState } from "react";

interface Url {
  url: any;
  width?: any;
}

const ImageHandler: React.FC<Url> = ({ url, width }) => {
  const [errorOccurred, setErrorOccurred] = useState(false);
  const [loadingOccurred, setLoadingOccurred] = useState(true);
  const [src, setSrc] = useState("");

  useEffect(() => {
    setSrc(`${url}`);
  });

  const handleImageError = () => {
    setErrorOccurred(true);
    setSrc(`${url}`);
  };

  const handleImageLoading = () => {
    setLoadingOccurred(false);
    setSrc(`${url}`);
  };
  return (
    <>
      {loadingOccurred && <CircularProgress color="secondary" />}
      {errorOccurred ? (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography sx={{ color: "red" }}>Image Error</Typography>
          <Image
            width={70}
            height={70}
            src={logo}
            alt="Fallback"
            onLoad={handleImageLoading}
          />
        </Box>
      ) : width ? (
        <Image
          style={{ borderRadius: "10px" }}
          src={`${process.env.NEXT_PUBLIC_FILE}${src}`}
          alt="Not Found"
          width={width}
          height={width}
          // sizes="100px"
          priority={true}
          onError={handleImageError}
          onLoad={handleImageLoading}
        />
      ) : (
        <Image
          style={{ borderRadius: "10px" }}
          src={`${process.env.NEXT_PUBLIC_FILE}${src}`}
          alt="Not Found"
          layout="fill"
          sizes="300px"
          // priority={true}
          onError={handleImageError}
          onLoad={handleImageLoading}
        />
      )}
    </>
  );
};

export default ImageHandler;
