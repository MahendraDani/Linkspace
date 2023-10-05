import { Box, Paper } from "@mui/material";
import React, { useState } from "react";
import LinkTable from "../components/Links/LinkTable";
import TagTable from "../components/Tags/TagTable";

const Main = ({ showLinkTable, showTagTable }) => {
  return (
    <Box elevation="false" sx={{ flex: 8, p: 2 }}>
      {showLinkTable && <LinkTable />}
      {showTagTable && <TagTable />}
    </Box>
  );
};

export default Main;
