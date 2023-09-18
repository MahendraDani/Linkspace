import React from "react";
import { Box, Button, Container, Typography } from "@mui/material";

const Navbar = () => {
  return (
    <div>
      <Box sx={{ backgroundColor: "#ffddd2" }}>
        <Container
          sx={{
            height: "4rem",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography variant="h4">LinkSpace</Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              gap: "1rem",
            }}
          >
            <Button variant="outlined">Login</Button>
            <Button variant="contained">Signup</Button>
          </Box>
        </Container>
      </Box>
    </div>
  );
};

export default Navbar;
