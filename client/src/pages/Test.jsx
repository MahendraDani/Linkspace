import { Button } from "@mui/material";
import React, { useState } from "react";
import BasicPopover from "../layout/Popovers/basic.popover";
import { useSetRecoilState } from "recoil";
import { basicPopoverAnchorElState } from "../store/atoms/ui/popover/basicPopover.atom";

const Test = () => {
  const setAnchorEl = useSetRecoilState(basicPopoverAnchorElState);
  return (
    <div>
      <Button
        variant="contained"
        onClick={(e) => {
          setAnchorEl(e.currentTarget);
        }}
      >
        Pop me
      </Button>
      <BasicPopover />
    </div>
  );
};

export default Test;
