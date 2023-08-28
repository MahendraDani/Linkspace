const mongoose = require("mongoose");
const DATABSE_URI = process.env.DATABASE_URL;

const dbConnect = async () => {
  await mongoose
    .connect(DATABSE_URI, {
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
