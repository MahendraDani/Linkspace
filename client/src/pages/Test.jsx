import React from "react";

const Test = () => {
  const mode = import.meta.env.PROD;
  const show = import.meta.env.VITE_BASE;
  return (
    <>
      <div>Hello</div>
      <div>{import.meta.env.VITE_API_URL}</div>
    </>
  );
};
export default Test;
