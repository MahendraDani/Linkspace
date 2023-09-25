const mongoose = require("mongoose");

const TagsSchema = new mongoose.Schema({
  tagID: String,
  userID: String,
  purpose: String,
  tag: String,
  createdBy: String,
  createdOn: String,
  createdAt: Array,
});

const Tag = mongoose.model("tags", TagsSchema);
module.exports = { Tag };
