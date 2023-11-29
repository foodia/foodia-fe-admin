import {
  Button,
  Chip,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { IconBan, IconCircleCheck, IconEye } from "@tabler/icons-react";
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";
import BaseCard from "../shared/DashboardCard";
import { useRouter } from "next/navigation";

type Props = {
  id: number;
  fullname: string;
  email: string;
  phone: number;
  status: string;
  pbg: string;
  ouath: { fullname: string; email: string; phone: string };
};

const List = () => {
  const [data, setData] = useState([]);
  const router = useRouter();

  useEffect(() => {
    axios
      .get("https://api.foodia-dev.nuncorp.id/api/v1/detonator/filter", {
        headers: { authorization: `Bearer ${localStorage.getItem("TOKEN")}` },
      })
      .then((res) => {
        setData(res.data.body);
        console.log(res.data.body);
      })
      .catch((error) => {});
  }, []);

  const Approvals = (id: number, status: string) => {
    axios
      .put(
        `https://api.foodia-dev.nuncorp.id/api/v1/detonator/approval/${id}`,
        {
          status,
        },
        {
          headers: { authorization: `Bearer ${localStorage.getItem("TOKEN")}` },
        }
      )
      .then((res) => {
        window.location.reload();
      })
      .catch((error) => {});
  };

  return (
    <BaseCard title="Detonator Management">
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
            mt: 2,
          }}
        >
          <TableHead>
            <TableRow>
              <TableCell>
                <Typography color="textSecondary" variant="h6">
                  No
                </Typography>
              </TableCell>
              <TableCell>
                <Typography color="textSecondary" variant="h6">
                  Fullname
                </Typography>
              </TableCell>
              <TableCell>
                <Typography color="textSecondary" variant="h6">
                  Email
                </Typography>
              </TableCell>
              <TableCell>
                <Typography color="textSecondary" variant="h6">
                  Phone number
                </Typography>
              </TableCell>
              <TableCell>
                <Typography color="textSecondary" variant="h6">
                  Status
                </Typography>
              </TableCell>
              <TableCell>
                <Typography color="textSecondary" variant="h6">
                  Action
                </Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((product: Props) => (
              <TableRow key={product.id}>
                <TableCell>
                  <Typography fontSize="15px" fontWeight={500}>
                    {product.id}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography fontSize="15px" fontWeight={500}>
                    {product.ouath.fullname}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography color="textSecondary" variant="h6">
                    {product.ouath.email}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography color="textSecondary" variant="h6">
                    {product.ouath.phone}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Chip
                    sx={{
                      pl: "4px",
                      pr: "4px",
                      backgroundColor:
                        product.status === "approved"
                          ? "success.main"
                          : "error.main",
                      color: "#fff",
                    }}
                    size="small"
                    label={product.status}
                  ></Chip>
                </TableCell>
                <TableCell>
                  <Stack spacing={1} direction="row">
                    <Button
                      variant="contained"
                      size="small"
                      color="success"
                      disabled={product.status === "Approved"}
                      onClick={() => Approvals(product.id, "approved")}
                    >
                      <IconCircleCheck size={18} /> Approve
                    </Button>
                    <Button
                      variant="contained"
                      size="small"
                      color="error"
                      disabled={product.status === "Rejected"}
                      onClick={() => Approvals(product.id, "rejected")}
                    >
                      <IconBan size={16} /> Reject
                    </Button>
                    <Link href="/ui-components/detonator/info">
                      <Button variant="contained" size="small" color="info">
                        <IconEye size={20} /> View
                      </Button>
                    </Link>
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

export default List;
