import { atom } from "recoil";

export const LinksState = atom({
  key: "LinksState",
  default: [
    {
      linkID: "",
      userID: "",
      links: "",
      tags: [],
      createdOn: "",
      createdAt: [],
      createdBy: "",
    },
  ],
});
