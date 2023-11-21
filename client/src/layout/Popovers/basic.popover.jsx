import { AddLink, BookmarkAddOutlined } from "@mui/icons-material";
import { Button, Popover, Stack } from "@mui/material";
import React, { useState } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { basicPopoverAnchorElState } from "../../store/atoms/ui/popover/basicPopover.atom";

const BasicPopover = ({ children }) => {
  const anchorEl = useRecoilValue(basicPopoverAnchorElState);
  const setAnchorEl = useSetRecoilState(basicPopoverAnchorElState);

  const handleClose = () => {
    setAnchorEl(null);
  };
  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  return (
    <>
      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        <Stack p={2} sx={{ bgcolor: "secondary.main" }}>
          {children}
        </Stack>
      </Popover>
    </>
  );
};

const BasicPopoverContent = ({ children }) => {
  return <>{children}</>;
};

BasicPopover.Content = BasicPopoverContent;
export default BasicPopover;

{
  /* <Button
            variant="standard"
            startIcon={<AddLink />}
            sx={{ ":hover": { bgcolor: "darkGreen.main" } }}
          >
            New Link
          </Button>

          <Button
            variant="standard"
            startIcon={<BookmarkAddOutlined />}
            sx={{ ":hover": { bgcolor: "darkGreen.main" } }}
          >
            New Tag
          </Button> */
}
