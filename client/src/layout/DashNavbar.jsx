import { AddLink, BookmarkAddOutlined, Logout } from "@mui/icons-material";
import {
  Avatar,
  Box,
  Button,
  IconButton,
  Popover,
  Stack,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import CreateLink from "../components/Links/CreateLink";
import CreateTag from "../components/Tags/CreateTag";
import Searchbar from "../components/Search/Searchbar";
import axios from "axios";
import Cookies from "js-cookie";
import { apiUrl } from "../config/apiEndpoints";

const DashNavbar = () => {
  const userName = localStorage.getItem("name");
  const handleLogout = () => {
    const token = localStorage.getItem("token");
    if (token) {
      localStorage.removeItem("token");
      localStorage.removeItem("userID");
      localStorage.removeItem("name");

      Cookies.remove("name");
      Cookies.remove("userID");
      Cookies.remove("token");
      window.location = "/";
    }
  };

  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  const [showModal, setShowModal] = useState(false);
  const handleCloseModal = () => {
    setShowModal(false);
  };
  const handleOpenModal = () => {
    setShowModal(true);
  };

  const [showCreateTagModal, setShowCreateTagModal] = useState(false);
  const handleCloseCreateTagModal = () => {
    setShowCreateTagModal(false);
  };

  const handleOpenCreateTagModal = () => {
    setShowCreateTagModal(true);
  };
  const [tags, setTags] = useState([]);
  const getTagsOfUsers = async () => {
    try {
      const response = await axios.get(
        `${apiUrl}/api/users/tags/all/${localStorage.getItem("userID")}`,
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
  useEffect(() => {
    getTagsOfUsers();
  }, []);
  return (
    // #43C76A
    <Box
      sx={{
        position: "sticky",
        top: 0,
        zIndex: 10,
        width: "100%",
        p: 0.5,
        px: { md: 10 },
        bgcolor: "secondary.main",
        mb: 4,
      }}
    >
      <Box>
        <Stack
          direction={"row"}
          sx={{ justifyContent: "space-between", alignItems: "center" }}
        >
          <Box>
            <Typography variant="h5" fontWeight={600}>
              Linkspace
            </Typography>
          </Box>
          <Stack
            direction={"row"}
            sx={{
              justifyContent: "space-between",
              alignItems: "center",
              gap: 2,
            }}
          >
            <Box>
              <Searchbar />
            </Box>
            <Box>
              <IconButton onClick={handleClick}>
                <Avatar>{userName.split("")[0]}</Avatar>
              </IconButton>
              {/* Hello */}
              <Popover
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
              >
                <Stack p={2} sx={{ bgcolor: "secondary.main" }}>
                  <Button
                    variant="standard"
                    startIcon={<AddLink />}
                    onClick={handleOpenModal}
                    sx={{ ":hover": { bgcolor: "darkGreen.main" } }}
                  >
                    New Link
                  </Button>

                  <CreateLink
                    showModal={showModal}
                    handleCloseModal={handleCloseModal}
                    userTags={tags}
                  />
                  <Button
                    variant="standard"
                    startIcon={<BookmarkAddOutlined />}
                    onClick={handleOpenCreateTagModal}
                    sx={{ ":hover": { bgcolor: "darkGreen.main" } }}
                  >
                    New Tag
                  </Button>
                  <CreateTag
                    showModal={showCreateTagModal}
                    handleCloseModal={handleCloseCreateTagModal}
                  />
                  <Button
                    startIcon={<Logout />}
                    onClick={handleLogout}
                    variant="standard"
                    sx={{ ":hover": { bgcolor: "darkGreen.main" } }}
                  >
                    Logout
                  </Button>
                </Stack>
              </Popover>
            </Box>
          </Stack>
        </Stack>
      </Box>
    </Box>
  );
};

export default DashNavbar;
