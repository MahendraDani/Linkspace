import React from "react";
import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";
import { Typography, Box, Stack, Button } from "@mui/material";
import { Link } from "react-router-dom";
import HomePageTitle from "../layout/HomePageTitle";
import { ArrowRightAltOutlined } from "@mui/icons-material";

const Home = () => {
  return (
    // #F0FAF3
    <Box
      sx={{
        minHeight: "100vh",
        bgcolor: "greenBackground.main",
      }}
    >
      <Navbar />
      <Box
        sx={{
          height: { md: "37.7rem", xs: "35.8rem" },
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          gap: 2,
        }}
      >
        {/* For computer screens */}
        <div>
          <Stack
            sx={{
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "row",
              gap: 1,
              display: { xs: "none", lg: "flex" },
            }}
          >
            <HomePageTitle title={"Manage"} variant={"h1"} />
            <HomePageTitle title={"Access"} variant={"h1"} />
            <HomePageTitle title={"Organize"} variant={"h1"} />
          </Stack>
        </div>
        {/* For medium screens */}
        <div>
          <Stack
            sx={{
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "row",
              gap: 1,
              display: { xs: "none", md: "flex", lg: "none" },
            }}
          >
            <HomePageTitle title={"Manage"} variant={"h2"} />
            <HomePageTitle title={"Access"} variant={"h2"} />
            <HomePageTitle title={"Organize"} variant={"h2"} />
          </Stack>
        </div>
        {/* For small screens */}
        <div>
          <Stack
            sx={{
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              gap: 1,
              display: { xs: "flex", md: "none" },
            }}
          >
            <HomePageTitle title={"Manage"} variant={"h2"} />
            <HomePageTitle title={"Access"} variant={"h2"} />
            <HomePageTitle title={"Organize"} variant={"h2"} />
          </Stack>
        </div>
        <Box
          sx={{
            textAlign: "center",
            mt: -2,
            px: { xs: 2 },
          }}
        >
          <Typography variant="h5" color={"#616161"}>
            The platform to manage, organize and access your e-resources via
            links!
          </Typography>
        </Box>
        <Box sx={{ pt: 3 }}>
          <Link to={"/signup"}>
            <Button
              endIcon={<ArrowRightAltOutlined />}
              variant="contained"
              disableElevation
              sx={{
                py: 1,
                px: 3,
                border: "2px solid #0D090A",
                bgcolor: "#424242",
                color: "white",
                ":hover": {
                  bgcolor: "#0D090A",
                  color: "white",
                },
              }}
            >
              <Typography>Get started</Typography>
            </Button>
          </Link>
        </Box>
        <div>{import.meta.env.VITE_BASE}</div>
      </Box>
      {/* <Footer /> */}
    </Box>
  );
};

export default Home;
