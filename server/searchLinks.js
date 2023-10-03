const links = [
  {
    _id: {
      $oid: "651babb229865549e11e843e",
    },
    linkID: "4e7e5341-425f-4fae-897c-a12672bfbe01",
    userID: "a91cfa96-3db3-4b33-938d-a74a0d5e3257",
    title: "Calculus",
    link: "https://mathworks.com/MahendraDani",
    tags: ["mathematics", "academics"],
    createdOn: "03.10.2023",
    createdAt: ["11", ":", 20, " AM"],
    createdBy: "Mahendra Dani",
    __v: 0,
  },
  {
    _id: {
      $oid: "651bab8d29865549e11e843b",
    },
    linkID: "35e73e0a-7022-4adc-be56-90eb21d9735f",
    userID: "a91cfa96-3db3-4b33-938d-a74a0d5e3257",
    title: "My Github Account",
    link: "https://github.com/MahendraDani",
    tags: ["career", "academics"],
    createdOn: "03.10.2023",
    createdAt: ["11", ":", 20, " AM"],
    createdBy: "Mahendra Dani",
    __v: 0,
  },
  {
    _id: {
      $oid: "651bad901d193460c60ef9d2",
    },
    linkID: "a5b6f8bb-c884-459b-b5de-bda12e0ce14f",
    userID: "a91cfa96-3db3-4b33-938d-a74a0d5e3257",
    title: "My Facebook Account",
    link: "https://facebook.com/MahendraDani",
    tags: ["fun"],
    createdOn: "03.10.2023",
    createdAt: ["11", ":", 28, " AM"],
    createdBy: "Mahendra Dani",
    __v: 0,
  },
  {
    _id: {
      $oid: "651babc829865549e11e8441",
    },
    linkID: "d5f2d060-25d5-4049-80c3-67f9b7275434",
    userID: "a91cfa96-3db3-4b33-938d-a74a0d5e3257",
    title: "My Linkedin Account",
    link: "https://linkedin.com/MahendraDani",
    tags: ["career"],
    createdOn: "03.10.2023",
    createdAt: ["11", ":", 21, " AM"],
    createdBy: "Mahendra Dani",
    __v: 0,
  },
];

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

const ans = searchLinks(links, "career");
console.log(ans);
