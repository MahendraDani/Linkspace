import React, { useState } from "react";
import {
  Box,
  Button,
  Card,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await axios.post(
        "http://localhost:3000/api/auth/login",
        {
          email: email,
          password: password,
        }
      );
      const token = response.data.accessToken;
      const userName = response.data.user.name;
      const userID = response.data.user.userID;
      localStorage.setItem("token", token);
      localStorage.setItem("userID", userID);
      localStorage.setItem("name", userName);
      if (token) {
        navigate("/dashboard");
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
          bgcolor: "primary.main",
        }}
      >
        <Paper
          sx={{ p: 3, bgcolor: "#9CE7B8", minWidth: "25rem" }}
          square
          elevation={1}
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
            <TextField
              sx={{ width: "100%" }}
              label="Email"
              variant="outlined"
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              sx={{ width: "100%" }}
              label="Password"
              type="password"
              variant="outlined"
              onChange={(e) => setPassword(e.target.value)}
            />
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
              onClick={handleLogin}
            >
              Login
            </Button>
          </Box>
        </Paper>
      </Stack>
      <Footer />
    </>
  );
};

export default Login;
