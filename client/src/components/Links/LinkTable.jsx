import { Box, Button, Paper, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import LinkTableItem from "./LinkTableItem";
import axios from "axios";

const LinkTable = () => {
  const [links, setLinks] = useState([]);

  const getLinksOfUser = async () => {
    try {
      const response = await axios.get(
        "http://localhost:3000/api/users/links/all/a91cfa96-3db3-4b33-938d-a74a0d5e3257",
        {
          headers: {
            authorization: localStorage.getItem("token"),
          },
        }
      );
      const userLinks = response.data;
      setLinks(userLinks.reverse());
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getLinksOfUser();
  }, []);
  return (
    <Paper square elevation={2}>
      <Typography variant="h6">My Links</Typography>
      <Stack>
        {links.map((link, index) => {
          return (
            <Box key={index}>
              <LinkTableItem link={link} />
            </Box>
          );
        })}
      </Stack>
    </Paper>
  );
};

export default LinkTable;
