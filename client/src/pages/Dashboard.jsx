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
import DashNavbar from "../layout/DashNavbar";

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <Box>
      <DashNavbar />
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
