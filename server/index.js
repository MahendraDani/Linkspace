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

const { validateUser } = require("./middlewares/validateUser");

dbConnect();

app.get("/dashboard", validateUser, (req, res) => {
  res.send("This is my top secret");
});

app.use("/", require("./routes/index"));
app.use("/api/auth", require("./routes/auth/signup"));
app.use("/api/auth", require("./routes/auth/login"));
app.use(
  "/api/users",
  validateUser,
  require("./routes/links/create/create.link")
);

app.use(
  "/api/users",
  validateUser,
  require("./routes/links/read/getOneById.link")
);

app.listen(PORT, () => {
  console.log(`Server running at port: ${PORT}`);
});
