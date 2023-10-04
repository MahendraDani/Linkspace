import React, { useState } from "react";
import { Box, Button, Link, Paper, Stack, Typography } from "@mui/material";
import { Edit, Delete, OpenInNew } from "@mui/icons-material";
import axios from "axios";

const LinkTableItem = ({ link }) => {
  const deleteLink = async (linkID) => {
    try {
      const response = await axios.delete(
        `http://localhost:3000/api/users/links/delete/${linkID}`,
        {
          headers: {
            authorization: localStorage.getItem("token"),
          },
        }
      );
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Stack
      direction={"row"}
      sx={{
        borderBottom: "1px solid gray",
        justifyContent: "space-between",
        alignItems: "center",
        px: 2,
        ":hover": {
          bgcolor: "#A0DDFF",
        },
      }}
    >
      <Box>
        <Stack direction={"column"} sx={{ py: 1 }}>
          {/* Outer box */}
          <Stack
            direction={"row"}
            sx={{
              justifyContent: "start",
              alignItems: "center",
              gap: 2,
              pr: 2,
            }}
          >
            <Box>
              <Typography
                variant="subtitle1"
                sx={{
                  fontWeight: "500",
                }}
              >
                {link.title}
              </Typography>
            </Box>
            <Box>
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
                          bgcolor: "#E8D6CB",
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
            </Box>
          </Stack>
          <Box>
            <Typography variant="body2">{link.link} </Typography>
          </Box>
        </Stack>
      </Box>
      <Stack
        direction={"row"}
        sx={{ alignItems: "center", justifyContent: "space-between", gap: 2 }}
      >
        <Box>
          <Typography variant="body2">{link.createdOn}</Typography>
        </Box>
        <Box>
          <Edit
            fontSize="small"
            sx={{
              cursor: "pointer",
              "&:hover": {
                transform: "scale(1.2)",
                transition: "all 0.3s ease-in",
              },
            }}
          />
        </Box>
        <Box>
          <Link
            component="button"
            variant="body2"
            sx={{ cursor: "pointer", color: "black" }}
            onClick={() => {
              deleteLink(link.linkID);
            }}
          >
            <Delete
              fontSize="small"
              sx={{
                "&:hover": {
                  transform: "scale(1.1)",
                  transition: "all 0.3s ease-in",
                },
              }}
            />
          </Link>
        </Box>
        <Box>
          <a href={link} target="_blank">
            <OpenInNew
              fontSize="small"
              sx={{
                cursor: "pointer",
                "&:hover": {
                  transform: "scale(1.1)",
                  transition: "all 0.3s ease-in",
                },
              }}
            />
          </a>
        </Box>
      </Stack>
    </Stack>
  );
};

export default LinkTableItem;
