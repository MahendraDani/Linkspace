import React from "react";
import { Box, Button, Container, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <Box sx={{ bgcolor: "#81D99C", p: 1 }}>
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
              <Button variant="standard">Login</Button>
            </Link>
            <Link to={"/signup"}>
              <Button
                variant="contained"
                disableElevation
                sx={{
                  border: "2px solid #0D090A",
                  bgcolor: "transparent",
                  color: "black",
                  ":hover": {
                    bgcolor: "#0D090A",
                    color: "white",
                  },
                }}
              >
                Signup
              </Button>
            </Link>
          </Box>
        </Container>
      </Box>
    </div>
  );
};

export default Navbar;
