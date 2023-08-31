import React from "react";
import { useState } from "react";
import axios from "axios";
import { Box, Button, Card, TextField, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const handleSignup = async () => {
    try {
      const response = await axios.post(
        "https://linkspace-api.vercel.app/api/auth/signup",
        {
          name: name,
          email: email,
          password: password,
        }
      );
      console.log(response);
      navigate("/dashboard");
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
          backgroundColor: "#F9F5FF",
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
            SIGN UP
          </Typography>
          <TextField
            label="Name"
            variant="standard"
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            label="Email"
            variant="standard"
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            label="Password"
            variant="standard"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Box sx={{ textAlign: "center" }}>
            <Button
              variant="contained"
              sx={{
                boxShadow: "none",
                marginTop: "1rem",
                "&hover": { boxShadow: "none" },
              }}
              onClick={handleSignup}
            >
              Sign Up
            </Button>
          </Box>
        </Card>
      </Box>
    </>
  );
};
export default Signup;
