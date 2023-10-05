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
        <Box>
          <Typography variant="body2">{tag.createdOn}</Typography>
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
          // onClick={() => {
          //   deleteLink(link.linkID);
          // }}
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
          <Stack sx={{ p: 1 }}>
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
          </Stack>
        </Popover>
      </Box>
    </Stack>
  );
};

export default TagTableItem;
