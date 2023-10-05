import React from "react";
import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";
import { Typography, Box, Stack, Button } from "@mui/material";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    // #F0FAF3
    <Box sx={{ bgcolor: "#E0F5E6", minHeight: "100vh" }}>
      <Navbar />
      <Box
        sx={{
          height: { md: "31.7rem", xs: "30.8rem" },
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          gap: 2,
        }}
      >
        <Stack
          sx={{
            display: { xs: "none", md: "flex" },
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            gap: 2,
          }}
        >
          <Stack direction={"row"} gap={4}>
            <Typography variant="h2" sx={{ fontWeight: "900" }}>
              Manage
            </Typography>
            <Typography variant="h2" sx={{ fontWeight: "900" }}>
              Oranize
            </Typography>
            <Typography variant="h2" sx={{ fontWeight: "900" }}>
              Access
            </Typography>
          </Stack>
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
        </Stack>
        {/* Only for mobile screens */}
        <Stack
          sx={{
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            gap: 2,
            display: { xs: "flex", md: "none" },
          }}
        >
          <Stack direction={"row"} gap={1}>
            <Typography variant="h4" sx={{ fontWeight: "900" }}>
              Manage
            </Typography>
            <Typography variant="h4" sx={{ fontWeight: "900" }}>
              Oranize
            </Typography>
            <Typography variant="h4" sx={{ fontWeight: "900" }}>
              Access
            </Typography>
          </Stack>
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
        </Stack>
      </Box>
      <Footer />
    </Box>
  );
};

export default Home;
