import { OpenInNew } from "@mui/icons-material";
import {
  Alert,
  Box,
  Button,
  IconButton,
  Link,
  Modal,
  Stack,
  Typography,
} from "@mui/material";
import axios from "axios";
import React, { useState } from "react";

const SearchItem = ({ links, query }) => {
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
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  const searchedLinks = links.filter((link) => {
    if (
      link.title.toLowerCase().includes(query.toLowerCase()) ||
      link.link.toLowerCase().includes(query.toLowerCase())
    ) {
      return link;
    }
  });
  return (
    <>
      {/* Search Item Container */}
      <Stack>
        {searchedLinks.map((link, index) => {
          return (
            <Stack
              direction={"row"}
              key={index}
              sx={{
                border: "1px solid",
                borderColor: "lightCyan.main",
                p: 0.2,
                px: 2,
                justifyContent: "space-between",
                alignItems: "center",
                transition: "all 0.3s ease-in",
                ":hover": {
                  bgcolor: "darkGreen.main",
                  cursor: "pointer",
                  borderColor: "darkGreen.main",
                },
              }}
            >
              <Stack
                sx={{
                  display: "flex",
                }}
              >
                <Stack direction={"row"} sx={{ gap: 1, flexWrap: "wrap" }}>
                  <Typography variant="h6" fontWeight={400}>
                    {link.title}
                  </Typography>
                  <Stack
                    direction={"row"}
                    sx={{
                      justifyContent: "start",
                      alignItems: "center",
                      gap: 1,
                    }}
                  >
                    {link.tags.map((tag, index) => {
                      return (
                        <Box key={index}>
                          <Typography
                            variant="body2"
                            sx={{
                              bgcolor: "#AFF5FE",
                              py: 0.3,
                              px: 0.9,
                              borderRadius: "20px",
                              fontSize: 12,
                            }}
                          >
                            {tag}
                          </Typography>
                        </Box>
                      );
                    })}
                  </Stack>
                </Stack>
                <Typography variant="subtitle1">{link.link}</Typography>
              </Stack>
              <Box>
                <Box>
                  <Link href={link.link} target="_blank">
                    <IconButton>
                      <OpenInNew
                        fontSize="small"
                        sx={{
                          color: "gray.main",
                          cursor: "pointer",
                        }}
                      />
                    </IconButton>
                  </Link>
                </Box>
              </Box>
            </Stack>
          );
        })}
      </Stack>
    </>
  );
};

export default SearchItem;
