import { Box, Button, Stack, Typography, styled } from "@mui/material";
import React, { useEffect, useState } from "react";
import CreateLink from "../components/Links/CreateLink";
import GetTags from "../components/Tags/getTags";
import CreateTag from "../components/Tags/CreateTag";
import axios from "axios";
import { AddLink, BookmarkAddOutlined } from "@mui/icons-material";

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

  const [tags, setTags] = useState([]);
  const getTagsOfUsers = async () => {
    try {
      const response = await axios.get(
        `http://localhost:3000/api/users/tags/all/${localStorage.getItem(
          "userID"
        )}`,
        {
          headers: {
            authorization: localStorage.getItem("token"),
          },
        }
      );
      setTags(response.data.tags);
    } catch (error) {
      console.log(error);
    }
  };

  const buttonStyles = {
    textTransform: "none",
    minWidth: { lg: "12rem", md: "10rem" },
    textAlign: "center",
    bgcolor: "#D1F0DA",
    ":hover": {
      bgcolor: "#A1E3B5",
    },
  };
  return (
    <Box
      sx={{
        display: { xs: "none", md: "block" },
        flex: 2,
        p: 2,
        borderRight: "1px solid #C1EBCC",
      }}
    >
      <Box sx={{ position: "absolute" }}>
        <Stack gap={2}>
          <Box>
            <Typography variant="h5" fontWeight={600} textAlign={"center"}>
              Dashboard
            </Typography>
          </Box>
          <Stack gap={0.5}>
            <Box>
              <Button
                sx={buttonStyles}
                startIcon={<AddLink />}
                variant="standard"
                onClick={() => {
                  getTagsOfUsers();
                  handleOpenModal();
                }}
              >
                New Link
              </Button>
              <CreateLink
                showModal={showModal}
                handleCloseModal={handleCloseModal}
                userTags={tags}
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

        {/* <GetTags />

      <Button variant="outlined" onClick={handleOpenTagModal}>
        Create Tag
      </Button>
      <CreateTag
        showModal={showTagModal}
        handleCloseModal={handleCloseTagModal}
      /> */}
      </Box>
    </Box>
  );
};

export default Sidebar;
