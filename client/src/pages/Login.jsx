import React, { useState } from "react";
import { Box, Button, Card, TextField, Typography } from "@mui/material";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

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
      <Box
        sx={{
          width: "100%",
          height: "100vh",
          display: "grid",
          placeContent: "center",
          backgroundColor: "#eee",
        }}
      >
        <Card
          variant="outlined"
          sx={{
            padding: "3rem",
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            border: "none",
            boxShadow: "5px",
            minWidth: "17rem",
          }}
        >
          <Typography
            variant="h4"
            sx={{ textAlign: "center", fontWeight: "600", color: "#0F89E6" }}
          >
            LOGIN
          </Typography>
          <TextField
            label="Email"
            variant="standard"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <TextField
            label="Password"
            variant="standard"
            type="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <Box sx={{ textAlign: "center" }}>
            <Button
              variant="contained"
              sx={{
                boxShadow: "none",
                marginTop: "1rem",
                "&hover": { boxShadow: "none" },
              }}
              onClick={handleLogin}
            >
              Login
            </Button>
          </Box>
          <Typography sx={{ textAlign: "center" }}>
            Not an user?
            <Link to={"/"}>Signup</Link>
          </Typography>
        </Card>
      </Box>
    </>
  );
};

export default Login;
