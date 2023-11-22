import React, { useState } from "react";
import axios from "axios";
import { Box, Button } from "@mui/material";
import { apiUrl } from "../../config/apiEndpoints";

const GetTags = () => {
  const [tags, setTags] = useState([]);
  const getTagsOfUsers = async () => {
    try {
      const response = await axios.get(
        `${apiUrl}/api/users/tags/all/${localStorage.getItem("userID")}`,
        {
          headers: {
            authorization: localStorage.getItem("token"),
          },
        }
      );

      setTags(response.data.tags);
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
