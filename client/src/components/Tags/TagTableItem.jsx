import { Delete, Edit, MoreVert, OpenInNew } from "@mui/icons-material";
import {
  Alert,
  Box,
  IconButton,
  Modal,
  Popover,
  Stack,
  Typography,
} from "@mui/material";
import axios from "axios";
import React from "react";

const TagTableItem = ({ tag }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  const deleteTag = async (tagID) => {
    try {
      const response = await axios.delete(
        `http://localhost:3000/api/users/tags/delete/${tagID}`,
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
        borderBottom: "1px solid",
        borderColor: "primary.main",
        justifyContent: "space-between",
        alignItems: "center",
        transition: "all 0.3s ease-in",
        px: 2,
        ":hover": {
          bgcolor: "primary.main",
        },
      }}
    >
      <Box>
        <Stack direction={"column"} sx={{ py: 1, gap: 0.5 }}>
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
                  bgcolor: "#AFF5FE",
                  py: 0.3,
                  px: 1.1,
                  borderRadius: "5px",
                  fontSize: 12,
                }}
              >
                {tag.tagName}
              </Typography>
            </Box>
          </Stack>
          <Box>
            <Typography variant="body2">{tag.purpose} </Typography>
          </Box>
        </Stack>
      </Box>
      <Stack
        direction={"row"}
        sx={{
          alignItems: "center",
          justifyContent: "space-between",
          gap: 1,
          display: { xs: "none", md: "flex" },
        }}
      >
        {/* <Box>
          <Typography variant="body2">{tag.createdOn}</Typography>
        </Box> */}
        <Box>
          <IconButton>
            <Edit
              fontSize="small"
              sx={{
                cursor: "pointer",
                color: "gray.main",
              }}
            />
          </IconButton>
        </Box>
        <Box>
          <IconButton
            onClick={() => {
              deleteTag(tag.tagID);
            }}
          >
            <Delete
              fontSize="small"
              sx={{
                cursor: "pointer",
                color: "gray.main",
              }}
            />
          </IconButton>
        </Box>
      </Stack>
      <Box sx={{ display: { xs: "block", md: "none" } }}>
        <IconButton
          aria-describedby={id}
          variant="contained"
          onClick={handleClick}
        >
          <MoreVert sx={{ color: "gray.main" }} />
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
          <Stack sx={{ p: 1, gap: 1, bgcolor: "secondary.main" }}>
            <Box>
              <IconButton>
                <Edit
                  fontSize="small"
                  sx={{
                    cursor: "pointer",
                    color: "gray.main",
                  }}
                />
              </IconButton>
            </Box>
            <Box>
              <IconButton
                onClick={() => {
                  deleteTag(tag.tagID);
                }}
              >
                <Delete
                  fontSize="small"
                  sx={{
                    color: "gray.main",
                    cursor: "pointer",
                  }}
                />
              </IconButton>
            </Box>
          </Stack>
        </Popover>
      </Box>
    </Stack>
  );
};

export default TagTableItem;
