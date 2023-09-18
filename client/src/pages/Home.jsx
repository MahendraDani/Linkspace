import React from "react";
import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";
import { Typography, Box } from "@mui/material";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Box sx={{ height: "35rem", display: "grid", placeContent: "center" }}>
        <Typography variant="h2">Welcome to LinkSpace</Typography>
      </Box>
      <Footer />
    </div>
  );
};

export default Home;
