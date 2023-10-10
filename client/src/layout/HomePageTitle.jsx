import { Typography } from "@mui/material";
import React from "react";

const HomePageTitle = ({ title, variant }) => {
  return (
    <div class="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
      <p class="text-4xl font-bold">
        <Typography variant={variant} sx={{ fontWeight: "900" }}>
          {title}
          <span className="text-gray-700">.</span>
        </Typography>
      </p>
    </div>
  );
};

export default HomePageTitle;
