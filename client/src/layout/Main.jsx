import { Box, Link, Paper, Stack, Typography } from "@mui/material";
import React from "react";
import LinkTableItem from "../components/LinkTableItem";
import LinkTable from "../components/LinkTable";
import DashNavbar from "./DashNavbar";

const Main = () => {
  return (
    <Box sx={{ border: "2px solid tomato", flex: 8 }}>
      <LinkTable />
    </Box>
  );
};

export default Main;
