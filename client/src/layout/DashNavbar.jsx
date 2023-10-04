import { Logout, Search } from "@mui/icons-material";
import {
  Avatar,
  Box,
  Button,
  IconButton,
  Paper,
  Popover,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
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
      navigate("/");
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

  return (
    <Box
      sx={{
        width: "100%",
        p: 2,
        px: { md: 10 },
        borderBottom: "2px solid #C1EBCD",
        bgcolor: "#D1F0DA",
        mb: 4,
      }}
    >
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
        <Box>
          <IconButton onClick={handleClick}>
            <Avatar {...stringAvatar(localStorage.getItem("name"))} />
          </IconButton>
          <Popover
            id={id}
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
          >
            <Stack>
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
    </Box>
  );
};

export default DashNavbar;
