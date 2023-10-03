import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    const token = localStorage.getItem("token");
    if (token) {
      localStorage.removeItem("token");
      localStorage.removeItem("userID");
      localStorage.removeItem("name");
      navigate("/");
    }
  };
  return (
    // <Box
    //   sx={{
    //     display: "grid",
    //     placeContent: "center",
    //     width: "100%",
    //     height: "100vh",
    //   }}
    // >
    //   <Typography variant="h2" sx={{ color: "#0F89E6" }}>
    //     Welcome To Linkspace
    //   </Typography>
    //   <div>
    <Button variant="contained" onClick={handleLogout}>
      Logout
    </Button>
    //   </div>
    // </Box>
  );
};

export default Dashboard;
