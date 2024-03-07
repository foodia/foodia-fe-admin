import Link from "next/link";
import { styled, Typography } from "@mui/material";
import Image from "next/image";
import logo from "@/utils/notFound.png";
import { useState } from "react";

const LinkStyled = styled(Link)(() => ({
  height: "40px",
  width: "180px",
  overflow: "hidden",
  display: "block",
}));

interface Url {
  url: string;
}

const Images: React.FC<Url> = ({ url }) => {
  const [imageError, setImageError] = useState(false);
  const handleError = () => {
    setImageError(true);
  };
  return (
    <>
      {imageError ? (
        <Image src={logo} alt="Not Found" layout="fill" onError={handleError} />
      ) : (
        <Image
          style={{ borderRadius: "10px" }}
          src={`${url}`}
          alt="Not Found"
          layout="fill"
          onError={handleError}
        />
      )}
    </>
  );
};

export default Images;
