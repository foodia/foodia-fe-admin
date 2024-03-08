import Image from "next/image";
import logo from "@/utils/notFound.png";
import { useState } from "react";
import { Box, CircularProgress, Typography } from "@mui/material";

interface Url {
  url?: any;
  imageError?: any;
  handleError?: any;
  width?: any;
  height?: any;
}

const ImageHandler: React.FC<Url> = ({ url, width }) => {
  const [errorOccurred, setErrorOccurred] = useState(false);
  const [loadingOccurred, setLoadingOccurred] = useState(true);

  const handleImageError = () => {
    setErrorOccurred(true);
  };

  const handleImageLoading = () => {
    setLoadingOccurred(false);
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
          src={`${process.env.NEXT_PUBLIC_FILE}/${url}`}
          alt="Not Found"
          width={width}
          height={width}
          sizes="100px"
          onError={() => handleImageError()}
          onLoad={handleImageLoading}
          loading="lazy"
        />
      ) : (
        <Image
          style={{ borderRadius: "10px" }}
          src={`${process.env.NEXT_PUBLIC_FILE}/${url}`}
          alt="Not Found"
          layout="fill"
          sizes="100px"
          onError={() => handleImageError()}
          onLoad={handleImageLoading}
          loading="lazy"
        />
      )}
    </>
  );
};

export default ImageHandler;
