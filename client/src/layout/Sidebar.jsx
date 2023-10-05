import { Box, Button, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import CreateLink from "../components/Links/CreateLink";
import GetTags from "../components/Tags/getTags";
import CreateTag from "../components/Tags/CreateTag";
import axios from "axios";
import { AddLink } from "@mui/icons-material";

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
  return (
    <Box
      sx={{
        display: { xs: "none", md: "block" },
        flex: 2,
        p: 2,
      }}
    >
      <Box sx={{ position: "absolute" }}>
        <Stack gap={2}>
          <Box>
            <Typography variant="h5" fontWeight={600}>
              Dashboard
            </Typography>
          </Box>
          <Box>
            <Button
              startIcon={<AddLink />}
              variant="outlined"
              onClick={() => {
                getTagsOfUsers();
                handleOpenModal();
              }}
            >
              Create link
            </Button>
            <CreateLink
              showModal={showModal}
              handleCloseModal={handleCloseModal}
              userTags={tags}
            />
          </Box>
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
