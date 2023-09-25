const mongoose = require("mongoose");

const LinkSchema = new mongoose.Schema({
  linkID: { type: String },
  userID: { type: String },
  title: { type: String },
  link: { type: String },
  tags: { type: [String] },
  createdOn: { type: String },
  createdAt: { type: Array },
  createdBy: { type: String },
});

const Link = mongoose.model("links", LinkSchema);
module.exports = { Link };
