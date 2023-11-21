import React from "react";

const Test = () => {
  const mode = import.meta.env.PROD;
  const show = import.meta.env.VITE_BASE;
  return <>{mode ? <div>{show}</div> : "Hellooo it didn't work"}</>;
};

export default Test;
