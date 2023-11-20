import { Box, TextField } from "@mui/material";
import React from "react";

const PasswordField = ({ label, onChange }) => {
  return (
    <Box>
      <TextField
        type="password"
        color="gray"
        variant="outlined"
        label={label}
        sx={{ width: "100%" }}
        onChange={onChange}
      />
    </Box>
  );
};

export default PasswordField;
