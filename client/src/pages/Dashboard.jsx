import { Box, Container, Stack } from "@mui/material";
import React from "react";
import Sidebar from "../layout/Sidebar";
import Main from "../layout/Main";
import DashNavbar from "../layout/DashNavbar";

const Dashboard = () => {
  return (
    <Box sx={{ minHeight: "100vh", bgcolor: "#F0FAF3" }}>
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
