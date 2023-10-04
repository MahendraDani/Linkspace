import { Search } from "@mui/icons-material";
import {
  Box,
  Button,
  IconButton,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
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
  return (
    <Box
      sx={{
        width: "100vw",
        p: 2,
        px: { md: 10 },
        borderBottom: "2px solid gray",
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
        <Stack
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
        </Stack>
        <Box>
          <Button variant="outlined" onClick={handleLogout}>
            Logout
          </Button>
        </Box>
      </Stack>
    </Box>
  );
};

export default DashNavbar;
