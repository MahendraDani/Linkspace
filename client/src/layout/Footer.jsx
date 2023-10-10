import { Box, Container, Typography, Link } from "@mui/material";
import React from "react";

const Footer = () => {
  return (
    <div>
      <Box
        sx={{
          position: "fixed",
          left: 0,
          right: 0,
          bottom: 0,
          bgcolor: "white",
          borderTopRightRadius: 10,
          p: 1,
        }}
      >
        <Container>
          <Box
            sx={{
              height: "3rem",
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {/* <Typography variant="h6">Linkspace</Typography> */}
            <a href="https://github.com/MahendraDani/Linkspace" target="blank">
              Github
            </a>
          </Box>
        </Container>
      </Box>
    </div>
  );
};

export default Footer;
