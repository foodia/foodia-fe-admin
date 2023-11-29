import React from "react";
import {
  Typography,
  Box,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Chip,
  TableContainer,
  Stack,
  Button,
} from "@mui/material";
import BaseCard from "../shared/DashboardCard";
import { IconEye } from '@tabler/icons-react';
import Image from "next/image";

import img1 from "public/images/backgrounds/u1.jpg";
import img2 from "public/images/backgrounds/u3.jpg";

const products = [
  {
    id: "1",
    name: "Selfi.jpg",
    post: "2 MB",
    pname: "Elite Admin",
    priority: "Low",
    pbg: "primary.main",
    budget: "3.9",
    img: img1,
  },
  {
    id: "2",
    name: "KTP.jpg",
    post: "1 MB",
    pname: "Real Homes WP Theme",
    priority: "Medium",
    pbg: "secondary.main",
    budget: "24.5",
    img: img2,
  },
];

const Attachment = () => {
  return (
    <BaseCard title="Attachment">
      <TableContainer
        sx={{
          width: {
            xs: "274px",
            sm: "100%",
          },
        }}
      >
        <Table
          aria-label="simple table"
          sx={{
            whiteSpace: "nowrap",
          }}
        >
          <TableBody>
            {products.map((product) => (
              <TableRow key={product.name}>
                <TableCell>
                  <Image
                    src={product.img}
                    alt="img"
                    style={{ width: "100px", height: "50px", borderRadius: "5px" }}
                  />
                </TableCell>
                <TableCell>
                  <Box display="flex" alignItems="center">
                    <Box>
                      <Typography variant="h6" fontWeight={500}>
                        {product.name}
                      </Typography>
                      <Typography color="textSecondary" fontSize="13px">
                        {product.post}
                      </Typography>
                    </Box>
                  </Box>
                </TableCell>
                <TableCell>
                  <Stack spacing={1} direction="row">
                    <Button variant="contained" size="small" color="info">
                      <IconEye size={20} /> View
                    </Button>
                  </Stack>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </BaseCard>
  );
};

export default Attachment;
