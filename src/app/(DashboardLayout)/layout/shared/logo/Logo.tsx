import Link from "next/link";
import { styled, Typography } from "@mui/material";
import Image from "next/image";

const LinkStyled = styled(Link)(() => ({
  height: "40px",
  width: "180px",
  overflow: "hidden",
  display: "block",
}));

const Logo = () => {
  return (
    <Typography variant="h1" style={{ color: "#3FB648", fontSize: "35px", fontWeight: "650" }}>Foodia</Typography>
  );
};

export default Logo;
