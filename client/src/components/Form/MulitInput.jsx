import {
  Box,
  Chip,
  FormControl,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { TagsState } from "../../store/atoms/tag.atom";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const MulitInput = ({ handleChange, inputTags, defaultValue }) => {
  const userTags = useRecoilValue(TagsState);
  const userTagNames = userTags.map((tag) => {
    return tag.tagName;
  });
  return (
    <div>
      <FormControl sx={{ width: "100%" }}>
        <InputLabel color="gray" id="demo-multiple-chip-label">
          Tags
        </InputLabel>
        <Select
          color="gray"
          labelId="demo-multiple-chip-label"
          id="demo-multiple-chip"
          multiple
          value={inputTags}
          onChange={handleChange}
          input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
          renderValue={(selected) => (
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
              {selected.map((value) => (
                <Chip
                  key={value}
                  label={value}
                  sx={{ bgcolor: "mediumGreen.main" }}
                />
              ))}
            </Box>
          )}
          MenuProps={MenuProps}
        >
          {userTagNames.map((name) => (
            <MenuItem key={name} value={name}>
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};

export default MulitInput;
