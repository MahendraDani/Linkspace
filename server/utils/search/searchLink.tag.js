const searchLinks = (links, tagName) => {
  let i, j;
  let searchedLinks = [];
  for (i = 0; i < links.length; i++) {
    const tags = links[i].tags;
    for (j = 0; j < tags.length; j++) {
      if (tags[j] === tagName) {
        searchedLinks.push(links[i]);
      }
    }
  }
  return searchedLinks;
};

module.exports = { searchLinks };
