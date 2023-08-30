const mongoose = require("mongoose");
const DATABASE_URI = process.env.DATABASE_URL;
const MONGO_COMPASS_URI = "http://127.0.0.1/linkspaceDB";

const dbConnect = async () => {
  await mongoose
    .connect(DATABASE_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("Connected to Database!");
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = { dbConnect };
