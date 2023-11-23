import React, { useState } from "react";
import axios from "axios";
import { Box, Button } from "@mui/material";
import { apiUrl } from "../../config/apiEndpoints";
import { getAllTagsOfUsersService } from "../../services/tags/getAllTagsofUser.service";

const GetTags = () => {
  const [tags, setTags] = useState([]);
  const getTagsOfUsers = async () => {
    try {
      const { isError, response } = await getAllTagsOfUsersService(
        localStorage.getItem("userID"),
        localStorage.getItem("token")
      );
      if (!isError) {
        setTags(response.data.tags);
      } else {
        console.log("some error in get all tags of user");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <Button onClick={getTagsOfUsers} variant="outlined">
        Get Tags
      </Button>
      <div>
        {tags.map((tag, index) => {
          return <Box key={index}>{tag.tagName}</Box>;
        })}
      </div>
    </>
  );
};

export default GetTags;
