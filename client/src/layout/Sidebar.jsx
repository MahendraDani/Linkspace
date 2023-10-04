import { Box, Button } from "@mui/material";
import React, { useState } from "react";
import CreateLink from "../components/Links/CreateLink";
import GetTags from "../components/Tags/getTags";
import CreateTag from "../components/Tags/CreateTag";

const Sidebar = () => {
  const [showModal, setShowModal] = useState(false);
  const handleOpenModal = () => {
    setShowModal(true);
  };
  const handleCloseModal = () => {
    setShowModal(false);
  };

  const [showTagModal, setShowTagModal] = useState(false);
  const handleOpenTagModal = () => {
    setShowTagModal(true);
  };
  const handleCloseTagModal = () => {
    setShowTagModal(false);
  };
  return (
    <Box
      sx={{
        display: { xs: "none", md: "block" },
        flex: 2,
        p: 2,
      }}
    >
      <Button variant="outlined" onClick={handleOpenModal}>
        Create link
      </Button>
      <CreateLink showModal={showModal} handleCloseModal={handleCloseModal} />
      <GetTags />

      <Button variant="outlined" onClick={handleOpenTagModal}>
        Create Tag
      </Button>
      <CreateTag
        showModal={showTagModal}
        handleCloseModal={handleCloseTagModal}
      />
    </Box>
  );
};

export default Sidebar;
