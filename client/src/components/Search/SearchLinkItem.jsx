import { OpenInNew } from "@mui/icons-material";
import { Box, IconButton, Link, Stack, Typography } from "@mui/material";
import React from "react";

const SearchLinkItem = ({ searchedLinks }) => {
  return (
    <Box>
      {searchedLinks.length !== 0 ? (
        searchedLinks.map((link, index) => {
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
                              bgcolor: "mediumGreen.main",
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
        })
      ) : (
        <Stack sx={{ textAlign: "center", p: 2 }}>
          <Typography variant="h6">No links found</Typography>
        </Stack>
      )}
    </Box>
  );
};

export default SearchLinkItem;
