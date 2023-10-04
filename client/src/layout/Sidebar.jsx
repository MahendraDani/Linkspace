import { Box, Button } from "@mui/material";
import React, { useState } from "react";
import CreateLink from "../components/Links/CreateLink";

const Sidebar = () => {
  const [showModal, setShowModal] = useState(false);
  const handleOpenModal = () => {
    setShowModal(true);
  };
  const handleCloseModal = () => {
    setShowModal(false);
  };
  return (
    <Box
      sx={{
        border: "2px solid skyblue",
        display: { xs: "none", md: "block" },
        flex: 2,
        p: 2,
      }}
    >
      <Button variant="outlined" onClick={handleOpenModal}>
        Create link
      </Button>
      <CreateLink showModal={showModal} handleCloseModal={handleCloseModal} />
    </Box>
  );
};

export default Sidebar;
