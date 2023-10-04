import React, { useState } from "react";
import {
  Box,
  Button,
  IconButton,
  Link,
  Paper,
  Popover,
  Stack,
  Typography,
} from "@mui/material";
import { Edit, Delete, OpenInNew, MoreVert } from "@mui/icons-material";
import axios from "axios";

const LinkTableItem = ({ link }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

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
      window.location = "/dashboard";
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Stack
      direction={"row"}
      sx={{
        border: "1px solid #C1EBCC",
        // borderBottom: "none",
        justifyContent: "space-between",
        alignItems: "center",
        transition: "all 0.3s ease-in",
        px: 2,
        ":hover": {
          bgcolor: "#C1EBCC",
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
      {/* Only for screens greater than md */}
      <Stack
        direction={"row"}
        sx={{
          alignItems: "center",
          justifyContent: "space-between",
          gap: 1,
          display: { xs: "none", md: "flex" },
        }}
      >
        <Box>
          <Typography variant="body2">{link.createdOn}</Typography>
        </Box>
        <Box>
          <IconButton>
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
          </IconButton>
        </Box>
        <Box>
          <IconButton
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
          </IconButton>
        </Box>
        <Box>
          <IconButton>
            <a href={link.link} target="_blank">
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
          </IconButton>
        </Box>
      </Stack>

      <Box sx={{ display: { xs: "block", md: "none" } }}>
        <IconButton
          aria-describedby={id}
          variant="contained"
          onClick={handleClick}
        >
          <MoreVert />
        </IconButton>
        <Popover
          id={id}
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
        >
          <Stack>
            <Box>
              <IconButton>
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
              </IconButton>
            </Box>
            <Box>
              <IconButton
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
              </IconButton>
            </Box>
            <Box>
              <IconButton>
                <a href={link.link} target="_blank">
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
              </IconButton>
            </Box>
          </Stack>
        </Popover>
      </Box>
    </Stack>
  );
};

export default LinkTableItem;
