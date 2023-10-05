import { Box, Paper } from "@mui/material";
import React from "react";
import LinkTable from "../components/Links/LinkTable";

const Main = () => {
  return (
    <Box elevation="false" sx={{ flex: 8, p: 2 }}>
      <LinkTable />
    </Box>
  );
};

export default Main;
