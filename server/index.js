require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bodyPraser = require("body-parser");
const { dbConnect } = require("./config/database");
const PORT = process.env.PORT;
const app = express();

app.use(cors());
app.use(bodyPraser.json());
app.use(bodyPraser.urlencoded({ extended: true }));

dbConnect();

app.use("/", require("./routes/index"));
app.use("/auth", require("./routes/auth/signup"));

app.listen(PORT, () => {
  console.log(`Server running at port: ${PORT}`);
});
