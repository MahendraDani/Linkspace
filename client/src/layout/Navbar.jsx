import React from "react";
import { Box, Button, Container, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <Box
        sx={{
          bgcolor: "greenBackground.main",
          p: 1,
          borderBottom: "1px solid",
        }}
      >
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
            {/* <Typography variant="h4">LinkSpace</Typography> */}
            <div class="bg-gradient-to-r from-gray-400 to-[#478564] bg-clip-text text-transparent">
              <p class="text-4xl font-bold">
                <Typography variant="h4" sx={{ fontWeight: "900" }}>
                  LinkSpace
                </Typography>
              </p>
            </div>
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
                  p: 0.5,
                  px: 1,
                  border: "2px solid #424242",
                  bgcolor: "transparent",
                  color: "black",
                  ":hover": {
                    bgcolor: "#424242",
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
                  p: 0.5,
                  px: 1,
                  border: "2px solid #0D090A",
                  bgcolor: "#424242",
                  color: "white",
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
