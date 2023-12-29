import {
  Box,
  Button,
  CircularProgress,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import BaseCard from "../shared/DashboardCard";

import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import Cookies from "js-cookie";
import Loading from "../../loading";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const theme = useTheme();

  const onLogin = () => {
    setIsLoading(true);
    axios
      .post(process.env.NEXT_PUBLIC_BASE + "/auth/login", {
        email,
        password,
      })
      .then((res) => {
        const role = res?.data?.body.role;
        const email = res?.data?.body.email;
        const token = res?.data.body.token;
        const username = res?.data?.body.fullname;
        Cookies.set("role", role);
        localStorage.setItem("TOKEN", token);
        localStorage.setItem("USERNAME", username);
        localStorage.setItem("ROLE", role);
        localStorage.setItem("EMAIL", email);
        if (role === "detonator") {
          router.push("/ui-components/detonator");
        } else {
          router.refresh();
          // window.location.href = "/authentication/sign-in";
        }
        // setIsLoading(false);
      })
      .catch((error) => {
        // if (error.code === "ERR_NETWORK") {
        //   AlertMessage("Gagal", "Koneksi Bermasalah", "Coba Lagi", "error");
        // } else {
        //   AlertMessage(
        //     "Gagal",
        //     "Email atau Password Tidak Sesuai",
        //     "Coba Lagi",
        //     "error"
        //   );
        // }
        console.log("error");
        setIsLoading(false);
      });
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "10px",
        gap: "15px",
      }}
    >
      <Typography
        color="textSecondary"
        variant="h6"
        style={{ display: "flex", justifyContent: "center" }}
      >
        Please Login
      </Typography>
      <TextField
        onChange={(e) => setEmail(e.target.value)}
        id="outlined-basic"
        label="Email"
        variant="outlined"
      />
      <TextField
        onChange={(e) => setPassword(e.target.value)}
        id="outlined-basic"
        label="Password"
        variant="outlined"
      />
      <Button
        onClick={() => onLogin()}
        style={{
          backgroundColor: theme.palette.primary.main,
          color: "white",
          gap: "7px",
        }}
      >
        {isLoading ? (
          <CircularProgress size="20px" sx={{ color: "white" }} />
        ) : (
          ""
        )}
        Login
      </Button>
    </Box>
  );
};

export default Login;
