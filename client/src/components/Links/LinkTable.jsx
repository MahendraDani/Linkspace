import { Box, Button, Paper, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import LinkTableItem from "./LinkTableItem";
import axios from "axios";
import { apiUrl } from "../../config/apiEndpoints";

const LinkTable = () => {
  const [links, setLinks] = useState([]);

  const getLinksOfUser = async () => {
    try {
      const response = await axios.get(
        `${apiUrl}/api/users/links/all/${localStorage.getItem("userID")}`,
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
    <Stack gap={2}>
      <Typography variant="h5" fontWeight={600}>
        My Links
      </Typography>
      <Stack>
        {links.map((link, index) => {
          return (
            <Box key={index}>
              <LinkTableItem link={link} />
            </Box>
          );
        })}
      </Stack>
    </Stack>
  );
};

export default LinkTable;
