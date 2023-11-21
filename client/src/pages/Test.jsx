import React from "react";

const Test = () => {
  const mode = import.meta.env.PROD;
  const show = import.meta.env.VITE_BASE;
  return (
    <>
      <div>{JSON.stringify(import.meta.env.VITE_FUN)}</div>
      <div>It mus workkkkkkk</div>
    </>
  );
};
export default Test;
