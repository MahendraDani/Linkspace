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
          bgcolor: "greenBackground.main",
          borderTop: "1px solid ",
          borderColor: "secondary.main",
          p: 1,
        }}
      >
        <Container>
          <Box
            sx={{
              height: "3rem",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography variant="h6">Linkspace</Typography>
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
