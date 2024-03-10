import Link from "next/link";
import { styled, Typography } from "@mui/material";
import Image from "next/legacy/image";
import logo from "@/utils/logo.png";

const LinkStyled = styled(Link)(() => ({
  height: "40px",
  width: "180px",
  overflow: "hidden",
  display: "block",
}));

const Logo = () => {
  return (
    <Image
      src={logo}
      alt="NotFound"
      width={150} // Set the desired width
      height={32.927} // Set the desired height
    />
  );
};

export default Logo;
