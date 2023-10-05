import { Box, Stack, Typography } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import TagTableItem from "./TagTableItem";

const TagTable = () => {
  const [tags, setTags] = useState([]);
  const getTagsOfUsers = async () => {
    try {
      const response = await axios.get(
        `http://localhost:3000/api/users/tags/all/${localStorage.getItem(
          "userID"
        )}`,
        {
          headers: {
            authorization: localStorage.getItem("token"),
          },
        }
      );

      setTags(response.data.tags.reverse());
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
