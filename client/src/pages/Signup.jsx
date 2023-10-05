import React from "react";
import { useState } from "react";
import axios from "axios";
import {
  Box,
  Button,
  Card,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Navbar from "../layout/Navbar";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const handleSignup = async () => {
    try {
      const response = await axios.post(
        "http://localhost:3000/api/auth/signup",
        {
          name: name,
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
      console.log(response);
      navigate("/dashboard");
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
          bgcolor: "#E0F5E6",
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
              <Typography variant="h5">Create Account</Typography>
            </Box>
            <TextField
              sx={{ width: "100%" }}
              label="Name"
              variant="outlined"
              onChange={(e) => setName(e.target.value)}
            />
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
              onClick={handleSignup}
            >
              Sign Up
            </Button>
          </Box>
        </Paper>
      </Stack>
    </>
  );
};
export default Signup;

// <Typography
//             variant="h4"
//             sx={{ textAlign: "center", fontWeight: "600", color: "#0F89E6" }}
//           >
//             SIGN UP
//           </Typography>
//           <TextField
//             label="Name"
//             variant="standard"
//             onChange={(e) => setName(e.target.value)}
//           />
//           <TextField
//             label="Email"
//             variant="standard"
//             onChange={(e) => setEmail(e.target.value)}
//           />
//           <TextField
//             label="Password"
//             variant="standard"
//             type="password"
//             onChange={(e) => setPassword(e.target.value)}
//           />
//           <Box sx={{ textAlign: "center" }}>
//             <Button
//               variant="contained"
//               sx={{
//                 boxShadow: "none",
//                 marginTop: "1rem",
//                 "&hover": { boxShadow: "none" },
//               }}
//               onClick={handleSignup}
//             >
//               Sign Up
//             </Button>
//           </Box>
//           <Typography sx={{ textAlign: "center" }}>
//             Already an user? <Link to={"/login"}>Login here</Link>
//           </Typography>
