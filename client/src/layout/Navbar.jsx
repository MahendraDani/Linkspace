import React from "react";
import { Box, Button, Container, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <Box sx={{ bgcolor: "#E0F5E6", p: 1, borderBottom: "2px solid #81D99C" }}>
        <Container
          sx={{
            height: "4rem",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Link to={"/"}>
            <Typography variant="h4">LinkSpace</Typography>
          </Link>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              gap: "1rem",
            }}
          >
            <Link to={"/login"}>
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
                Login
              </Button>
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
