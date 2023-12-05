import { Box, Button, TextField, Typography, useTheme } from "@mui/material";
import BaseCard from "../shared/DashboardCard";

import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const theme = useTheme();

  const onLogin = () => {
    axios
      .post("https://api.foodia-dev.nuncorp.id/api/v1/auth/login", {
        email,
        password,
      })
      .then((res) => {
        const role = res?.data?.body.role;
        const email = res?.data?.body.email;
        const user_id = res?.data?.body.user_id;
        const token = res?.data.body.token;
        const username = res?.data?.body.username;
        const is_locked = res?.data?.body.is_locked;
        localStorage.setItem("TOKEN", token);
        localStorage.setItem("USERNAME", username);
        localStorage.setItem("ROLE", role);
        localStorage.setItem("EMAIL", email);
        localStorage.setItem("USER_ID", user_id);
        localStorage.setItem("IS_LOCKED", is_locked);
        if (role === "detonator") {
          router.push("/ui-components/detonator");
        } else {
          router.refresh();
          // window.location.href = "/authentication/sign-in";
        }
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
        style={{ backgroundColor: theme.palette.primary.main, color: "white" }}
      >
        Login
      </Button>
    </Box>
  );
};

export default Login;
