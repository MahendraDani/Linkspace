import { Box, Container, Stack } from "@mui/material";
import React, { useState } from "react";
import Sidebar from "../layout/Sidebar";
import Main from "../layout/Main";
import DashNavbar from "../layout/DashNavbar";

const Dashboard = () => {
  const [showLinkTable, setShowLinkTable] = useState(true);
  const handleOpenLinkTable = () => {
    if (showLinkTable === false) {
      handleCloseTagTable();
      setShowLinkTable(true);
    }
  };
  const handleCloseLinkTable = () => {
    setShowLinkTable(false);
  };

  const [showTagTable, setShowTagTable] = useState(false);
  const handleOpenTagTable = () => {
    handleCloseLinkTable();
    setShowTagTable(true);
  };
  const handleCloseTagTable = () => {
    setShowTagTable(false);
  };
  return (
    <Box sx={{ minHeight: "100vh", bgcolor: "#F0FAF3" }}>
      <DashNavbar />
      <Container maxWidth={"lg"}>
        <Stack
          direction={"row"}
          sx={{ justifyContent: "space-between", gap: 4 }}
        >
          <Sidebar
            handleOpenLinkTable={handleOpenLinkTable}
            handleCloseLinkTable={handleCloseLinkTable}
            handleOpenTagTable={handleOpenTagTable}
            handleCloseTagTable={handleCloseTagTable}
          />
          <Main showLinkTable={showLinkTable} showTagTable={showTagTable} />
        </Stack>
      </Container>
    </Box>
  );
};

export default Dashboard;
