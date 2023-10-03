import { Box, Link, Paper, Stack, Typography } from "@mui/material";
import React from "react";
import LinkTableItem from "../components/LinkTableItem";

const Main = () => {
  return (
    <Box sx={{ border: "2px solid tomato", flex: 8 }}>
      <Paper square elevation={2}>
        <Typography variant="h6">My Links</Typography>
        {/* Table of lists */}
        <Stack>
          <LinkTableItem />
          <LinkTableItem />
          <LinkTableItem />
          <LinkTableItem />
          <LinkTableItem />
          <LinkTableItem />
        </Stack>
      </Paper>
    </Box>
  );
};

export default Main;
