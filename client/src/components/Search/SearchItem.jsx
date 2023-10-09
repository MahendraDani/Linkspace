import { Stack } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import SearchLinkItem from "./SearchLinkItem";

const SearchItem = ({ links, query, selectedFilter }) => {
  // const findLinksByTagName = async () => {
  //   try {
  //     const userID = localStorage.getItem("userID");
  //     const token = localStorage.getItem("token");
  //     const response = await axios.get(
  //       `http://localhost:3000/api/users/search/links/${userID}`,
  //       {
  //         tagName: query,
  //         headers: {
  //           authorization: token,
  //         },
  //       }
  //     );
  //     console.log(response);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  const searchedLinksByTitle = links.filter((link) => {
    if (link.title.toLowerCase().includes(query.toLowerCase())) {
      return link;
    }
  });

  const searchedLinksByLink = links.filter((link) => {
    if (link.link.toLowerCase().includes(query.toLowerCase())) {
      return link;
    }
  });

  const searchByAll = links.filter((link) => {
    if (
      link.link.toLowerCase().includes(query.toLowerCase()) ||
      link.title.toLowerCase().includes(query.toLowerCase())
    ) {
      return link;
    }
  });
  return (
    <>
      {/* Search Item Container */}
      <Stack>
        {selectedFilter === "title" ? (
          <SearchLinkItem searchedLinks={searchedLinksByTitle} />
        ) : null}
      </Stack>
      <Stack>
        {selectedFilter === "links" ? (
          <SearchLinkItem searchedLinks={searchedLinksByLink} />
        ) : null}
      </Stack>
      <Stack>
        {selectedFilter === "none" ? (
          <SearchLinkItem searchedLinks={searchByAll} />
        ) : null}
      </Stack>
    </>
  );
};

export default SearchItem;
