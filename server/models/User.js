const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  email: { type: String },
  password: { type: String },
});

const User = mongoose.model("Users", userSchema);
module.exports = { User };
