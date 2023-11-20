import { Box, TextField } from "@mui/material";
import React from "react";

const FormInput = ({ label, onChange }) => {
  return (
    <Box>
      <TextField
        color="gray"
        variant="outlined"
        label={label}
        sx={{ width: "100%" }}
        onChange={onChange}
      />
    </Box>
  );
};

export default FormInput;
