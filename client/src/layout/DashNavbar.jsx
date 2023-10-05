import {
  Add,
  AddLink,
  BookmarkAdd,
  BookmarkAddOutlined,
  ExpandMore,
  Logout,
  Search,
} from "@mui/icons-material";
import {
  Avatar,
  Box,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Paper,
  Popover,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import CreateLink from "../components/Links/CreateLink";
import CreateTag from "../components/Tags/CreateTag";
function stringToColor(string) {
  let hash = 0;
  let i;

  /* eslint-disable no-bitwise */
  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = "#";

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.slice(-2);
  }
  /* eslint-enable no-bitwise */

  return color;
}

const DashNavbar = () => {
  const handleLogout = () => {
    const token = localStorage.getItem("token");
    if (token) {
      localStorage.removeItem("token");
      localStorage.removeItem("userID");
      localStorage.removeItem("name");
      window.location = "/";
    }
  };

  function stringAvatar(name) {
    return {
      sx: {
        bgcolor: stringToColor(name),
      },
      children: `${name.split(" ")[0][0]}${name.split(" ")[1][0]}`,
    };
  }
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  //Menu
  const [anchorEl2, setAnchorEl2] = useState(null);
  const openMenu = Boolean(anchorEl2);
  const handleMenuClick = (event) => {
    setAnchorEl2(event.currentTarget);
  };
  const handleMenuClose = () => {
    setAnchorEl2(null);
  };

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
  return (
    // #43C76A
    <Box
      sx={{
        width: "100%",
        p: 1,
        px: { md: 10 },
        bgcolor: "#81D99C",
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
          {/* <Stack
          direction={"row"}
          sx={{
            alignItems: "center",
            justifyContent: "space-between",
            display: { xs: "none", md: "block" },
          }}
        >
          <input
            type="text"
            className="w-56 border-2 border-gray-500 focus: outline-none p-1 rounded-sm"
            placeholder="Search..."
          />
          <IconButton>
            <Search />
          </IconButton>
        </Stack> */}
          <Stack
            direction={"row"}
            sx={{
              justifyContent: "space-between",
              alignItems: "center",
              gap: 2,
            }}
          >
            <Box></Box>
            <Box>
              <IconButton onClick={handleClick}>
                <Avatar {...stringAvatar(localStorage.getItem("name"))} />
              </IconButton>
              <Popover
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
              >
                <Stack p={2}>
                  <Button
                    variant="standard"
                    startIcon={<AddLink />}
                    onClick={handleOpenModal}
                  >
                    New Link
                  </Button>

                  <CreateLink
                    showModal={showModal}
                    handleCloseModal={handleCloseModal}
                  />
                  <Button
                    variant="standard"
                    startIcon={<BookmarkAddOutlined />}
                    onClick={handleOpenCreateTagModal}
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
