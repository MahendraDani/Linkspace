const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  userID: { type: String },
  name: { type: String },
  email: { type: String },
  password: { type: String },
  createdOn: { type: String },
  createdAt: { type: Array },
});

const User = mongoose.model("Users", userSchema);
module.exports = { User };
