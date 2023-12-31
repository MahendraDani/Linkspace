import { Box, Button, Stack, Typography, styled } from "@mui/material";
import React, { useEffect, useState } from "react";
import CreateLink from "../components/Links/CreateLink";
import CreateTag from "../components/Tags/CreateTag";
import axios from "axios";
import { AddLink, BookmarkAddOutlined } from "@mui/icons-material";
import FormModal from "./modals/Form.modal";
import { apiUrl } from "../config/apiEndpoints";
import { getAllTagsOfUsersService } from "../services/tags/getAllTagsofUser.service";

const Sidebar = ({
  handleOpenLinkTable,
  handleCloseLinkTable,
  handleOpenTagTable,
  handleCloseTagTable,
}) => {
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

  const buttonStyles = {
    textTransform: "none",
    minWidth: { lg: "12rem", md: "10rem" },
    textAlign: "center",
    border: "2px solid",
    borderColor: "primary.main",
    ":hover": {
      bgcolor: "secondary.main",
      border: "2px solid",
      borderColor: "secondary.main",
    },
  };
  return (
    <Box
      sx={{
        display: { xs: "none", md: "flex" },
        flex: 2,
        p: 2,
        pr: 4,
        borderRight: "1px solid",
        borderColor: "secondary.main",
        justifyContent: "center",
      }}
    >
      <Box sx={{}}>
        <Stack gap={2}>
          <Box>
            <Typography variant="h5" fontWeight={600} textAlign={"center"}>
              Dashboard
            </Typography>
          </Box>
          <Stack gap={0.5}>
            <Box>
              <FormModal />
            </Box>
            <Box>
              <Button
                sx={buttonStyles}
                startIcon={<AddLink />}
                variant="standard"
                onClick={() => {
                  handleOpenModal();
                }}
              >
                New Link
              </Button>
              <CreateLink
                showModal={showModal}
                handleCloseModal={handleCloseModal}
              />
            </Box>
            <Box>
              <Button
                variant="standard"
                onClick={handleOpenTagModal}
                sx={buttonStyles}
                startIcon={<BookmarkAddOutlined />}
              >
                New Tag
              </Button>
              <CreateTag
                showModal={showTagModal}
                handleCloseModal={handleCloseTagModal}
              />
            </Box>
          </Stack>
          <Stack gap={0.5}>
            <Box>
              <Button
                variant="standard"
                onClick={handleOpenLinkTable}
                sx={buttonStyles}
              >
                My Links
              </Button>
            </Box>
            <Box>
              <Button
                variant="standard"
                onClick={handleOpenTagTable}
                sx={buttonStyles}
              >
                My Tags
              </Button>
            </Box>
          </Stack>
        </Stack>
      </Box>
    </Box>
  );
};

export default Sidebar;
