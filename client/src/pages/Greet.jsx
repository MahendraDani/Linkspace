import { Box, Typography } from "@mui/material";
import React from "react";

const Greet = () => {
  return (
    <Box
      sx={{
        display: "grid",
        placeContent: "center",
        width: "100%",
        height: "100vh",
      }}
    >
      <Typography variant="h2" sx={{ color: "#0F89E6" }}>
        Welcome Chief
      </Typography>
    </Box>
  );
};

export default Greet;
