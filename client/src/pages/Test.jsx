import React from "react";

const Test = () => {
  const mode = import.meta.env.PROD;
  const show = import.meta.env.VITE_BASE;
  return (
    <>
      <div>{JSON.stringify(import.meta.env)}</div>
      <div>{show}</div>
      <div>It mus work</div>
    </>
  );
};
export default Test;
