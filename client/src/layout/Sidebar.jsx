import { Box } from "@mui/material";
import React from "react";

const Sidebar = () => {
  return (
    <Box
      sx={{
        border: "2px solid skyblue",
        display: { xs: "none", md: "block" },
        flex: 2,
        p: 2,
      }}
    >
      Sidebar
    </Box>
  );
};

export default Sidebar;
