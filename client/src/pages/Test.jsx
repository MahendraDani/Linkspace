import React from "react";

const Test = () => {
  return (
    <>
      <div>Hello</div>
      <div>{JSON.stringify(import.meta.env)}</div>
    </>
  );
};
export default Test;
