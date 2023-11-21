import React from "react";
import { useState } from "react";
import axios from "axios";
import { Box, Button, Paper, Stack, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Navbar from "../layout/Navbar";
import FormInput from "../layout/inputs/TextField.input";
import PasswordField from "../layout/inputs/PasswordField.input";
import { SignupUser } from "../services/auth/signup.service";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const handleSignupUser = async () => {
    try {
      const { isError, response } = await SignupUser({ name, email, password });
      if (!isError) {
        // TODO : use cookies instead of local storage here using js-cookie library
        localStorage.setItem("name", response.data.user.name);
        localStorage.setItem("token", response.data.accessToken);
        localStorage.setItem("userID", response.data.user.userID);
        navigate("/dashboard");
        return;
      } else {
        const error = await response;

        const statusCode = error.response.status;

        switch (statusCode) {
          case 409:
            alert(error.response.data.message);

            //TODO : Use recoil to re-render the fields after the alert instead of refreshing the window
            window.location.reload();
            break;

          case 400:
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
              <Typography variant="h5">Create Account</Typography>
            </Box>
            <Box width="100%">
              <FormInput
                label={"Name"}
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </Box>
            <Box width="100%">
              <FormInput
                label={"Email"}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </Box>
            <Box width="100%">
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
                handleSignupUser();
              }}
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
