import React from "react";
import { Box, Button, Container, Typography } from "@mui/material";
import { Link } from "react-router-dom";

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
            <Link to={"/login"}>
              <Button variant="outlined">Login</Button>
            </Link>
            <Link to={"/signup"}>
              <Button variant="contained">Signup</Button>
            </Link>
          </Box>
        </Container>
      </Box>
    </div>
  );
};

export default Navbar;
