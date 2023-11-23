import React from "react";

const Test = () => {
  return (
    <>
      <div>Hello</div>
      <div>{import.meta.env.VITE_TEST}</div>
    </>
  );
};
export default Test;
