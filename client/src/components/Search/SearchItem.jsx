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
import React, { useState } from "react";

const SearchItem = ({ links, query }) => {
  const [openWarning, setOpenWarning] = useState(false);
  const handleOpenWarning = () => setOpenWarning(true);
  const handleCloseWarning = () => setOpenWarning(false);
  return (
    <>
      {/* Search Item Container */}
      <Stack sx={{}}>
        {links
          .filter((link) => {
            if (link.title.toLowerCase().includes(query)) {
              return link;
            }
          })
          .map((link, index) => {
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
                      <IconButton onClick={handleOpenWarning}>
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
