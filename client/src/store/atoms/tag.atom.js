import { atom } from "recoil";

export const TagsState = atom({
  key: "TagsState",
  default: [
    {
      tagID: "",
      userID: "",
      purpose: "",
      tagName: "",
      createdBy: "",
      createdOn: [],
      createdAt: "",
    },
  ],
});
