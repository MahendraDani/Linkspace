import { Box, Stack, Typography } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import TagTableItem from "./TagTableItem";
import { apiUrl } from "../../config/apiEndpoints";
import { getAllTagsOfUsersService } from "../../services/tags/getAllTagsofUser.service";

const TagTable = () => {
  const [tags, setTags] = useState([]);
  const getTagsOfUsers = async () => {
    try {
      const { isError, response } = await getAllTagsOfUsersService(
        localStorage.getItem("userID"),
        localStorage.getItem("token")
      );
      if (!isError) {
        setTags(response.data.tags.reverse());
      } else {
        console.log("some error in get all tags of user");
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getTagsOfUsers();
  }, []);
  return (
    <Stack gap={2}>
      <Typography variant="h5" fontWeight={600}>
        My Tags
      </Typography>
      <Stack>
        {tags.map((tag, index) => {
          return (
            <Box key={index}>
              <TagTableItem tag={tag} />
            </Box>
          );
        })}
      </Stack>
    </Stack>
  );
};

export default TagTable;
