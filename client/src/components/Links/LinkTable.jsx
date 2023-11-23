import { Box, Button, Paper, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import LinkTableItem from "./LinkTableItem";
import axios from "axios";
import { apiUrl } from "../../config/apiEndpoints";
import { getAllLinksOfUser } from "../../services/links/getAllLinksofUser.service";

const LinkTable = () => {
  const [links, setLinks] = useState([]);

  const getLinksOfUser = async () => {
    try {
      const { isError, response } = await getAllLinksOfUser(
        localStorage.getItem("userID"),
        localStorage.getItem("token")
      );
      if (!isError) {
        const userLinks = response.data;
        setLinks(userLinks.reverse());
        console.log(response);
      } else {
        console.log("Some error in get all links of user service");
      }
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
