import { Box, TextField } from "@mui/material";
import React from "react";

const FormInput = ({ label, onChange, defaultValue }) => {
  return (
    <Box>
      <TextField
        color="gray"
        variant="outlined"
        label={label}
        sx={{ width: "100%" }}
        defaultValue={defaultValue}
        onChange={onChange}
      />
    </Box>
  );
};

export default FormInput;
