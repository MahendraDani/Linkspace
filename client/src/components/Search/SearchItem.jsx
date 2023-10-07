import React, { useEffect } from "react";

const SearchItem = ({ links, query }) => {
  return (
    <>
      {links
        .filter((link) => {
          if (link.title.toLowerCase().includes(query)) {
            return link;
          }
        })
        .map((link, index) => {
          return <div key={index}>{link.title}</div>;
        })}
    </>
  );
};

export default SearchItem;
