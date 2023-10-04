import { Box } from "@mui/material";
import React from "react";
import LinkTable from "../components/Links/LinkTable";

const Main = () => {
  return (
    <Box sx={{ border: "2px solid tomato", flex: 8 }}>
      <LinkTable />
    </Box>
  );
};

export default Main;
