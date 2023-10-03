import React from "react";
import { Box, Link, Paper, Stack, Typography } from "@mui/material";
import { Edit, Delete, OpenInNew } from "@mui/icons-material";

const LinkTableItem = () => {
  return (
    <Stack
      direction={"row"}
      sx={{
        borderBottom: "1px solid gray",
        justifyContent: "space-between",
        alignItems: "center",
        px: 2,
      }}
    >
      {/* Title and link */}
      <Box>
        <Stack direction={"column"} sx={{ py: 1 }}>
          <Box>
            <Typography variant="subtitle1" sx={{ fontWeight: "500" }}>
              My Github Account
            </Typography>
          </Box>
          <Box>
            <Typography variant="body2">
              https://github.com/MahendraDani
            </Typography>
          </Box>
        </Stack>
      </Box>
      <Stack direction={"row"} sx={{ gap: 2 }}>
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
          <Delete
            fontSize="small"
            sx={{
              cursor: "pointer",
              "&:hover": {
                transform: "scale(1.1)",
                transition: "all 0.3s ease-in",
              },
            }}
          />
        </Box>
        <Box>
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
        </Box>
      </Stack>
    </Stack>
  );
};

export default LinkTableItem;
