import { Button } from "@mui/material";
import { IconEye } from "@tabler/icons-react";
import Link from "next/link";

export const ButtonAction = ({ query, pathname }: any) => {
  return (
    // <Link
    //   href={{
    //     pathname: {pathname},
    //     query: {query},
    //   }}
    // >
    <Button
      sx={{ backgroundColor: "#178B45" }}
      variant="contained"
      size="small"
      color="info"
    >
      <IconEye size={20} /> View
    </Button>
    // </Link>
  );
};
