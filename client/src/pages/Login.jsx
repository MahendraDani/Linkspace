import React, { useState } from "react";
import {
  Box,
  Button,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";
import FormInput from "../layout/inputs/TextField.input";
import PasswordField from "../layout/inputs/PasswordField.input";
import { LoginUser } from "../services/auth/login.service";
import Cookies from "js-cookie";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const { isError, response } = await LoginUser({ email, password });
      if (!isError) {
        Cookies.set("name", response.data.user.name, { secure: true });
        Cookies.set("token", response.data.accessToken, { secure: true });
        Cookies.set("userID", response.data.user.userID, { secure: true });
        // TODO : Use cookies instead of localstorage
        localStorage.setItem("token", response.data.accessToken);
        localStorage.setItem("userID", response.data.user.userID);
        localStorage.setItem("name", response.data.user.name);
        navigate("/dashboard");
      } else {
        const error = await response;
        const statusCode = error.response.status;
        switch (statusCode) {
          case 400:
            alert(error.response.data.message);
            window.location.reload();

            break;
          case 401:
            alert(error.response.data.message);
            window.location.reload();
            break;
          case 403:
            alert(error.response.data.message);
            window.location.reload();
          default:
            break;
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Navbar />
      <Stack
        sx={{
          width: "100%",
          height: "89.3vh",
          justifyContent: "center",
          alignItems: "center",
          bgcolor: "greenBackground.main",
        }}
      >
        <Paper
          sx={{ p: 3, bgcolor: "lightCyan.main", minWidth: "25rem" }}
          square
          elevation={0}
        >
          <Stack
            sx={{
              justifyContent: "center",
              alignItems: "center",
              gap: 2,
            }}
          >
            <Box sx={{ mb: 2 }}>
              <Typography variant="h5">Login to your Account</Typography>
            </Box>
            <Box width={"100%"}>
              <FormInput
                label={"Email"}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </Box>
            <Box width={"100%"}>
              <PasswordField
                label={"Password"}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </Box>
          </Stack>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Button
              variant="contained"
              disableElevation
              sx={{
                border: "1px solid #433C53",
                bgcolor: "transparent",
                color: "#433C53",
                marginTop: 4,
                ":hover": {
                  bgcolor: "#393347",
                  color: "white",
                },
              }}
              onClick={() => {
                handleLogin();
              }}
            >
              Login
            </Button>
          </Box>
        </Paper>
      </Stack>
    </>
  );
};

export default Login;
