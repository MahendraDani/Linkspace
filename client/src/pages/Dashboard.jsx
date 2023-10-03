import {
  Box,
  Button,
  Container,
  Grid,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../layout/Sidebar";
import Main from "../layout/Main";

const Dashboard = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    const token = localStorage.getItem("token");
    if (token) {
      localStorage.removeItem("token");
      localStorage.removeItem("userID");
      localStorage.removeItem("name");
      navigate("/");
    }
  };
  return (
    <Box>
      <Container maxWidth={"lg"}>
        <Stack
          direction={"row"}
          sx={{ justifyContent: "space-between", gap: 4 }}
        >
          <Sidebar />
          <Main />
        </Stack>
      </Container>
    </Box>
  );
};

export default Dashboard;
