require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bodyPraser = require("body-parser");
const { dbConnect } = require("./config/database");
const PORT = process.env.PORT;
const app = express();

app.use(
  cors({
    origin: "https://linkspace-eta.vercel.app",
  })
);
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
app.use("/api/users", validateUser, require("./routes/users/changePassword"));
app.use("/api/users", validateUser, require("./routes/users/deleteUser"));
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

app.use(
  "/api/users",
  validateUser,
  require("./routes/links/read/getAllById.link")
);

app.use(
  "/api/users/",
  validateUser,
  require("./routes/links/delete/deleteOneById")
);

app.use(
  "/api/users",
  validateUser,
  require("./routes/links/delete/deleteAllById")
);

app.use("/api/users", validateUser, require("./routes/tags/create/createTag"));
app.use(
  "/api/users",
  validateUser,
  require("./routes/tags/delete/deleteOne.tag")
);

app.use(
  "/api/users",
  validateUser,
  require("./routes/tags/delete/deleteAll.tag")
);

app.use("/api/users", validateUser, require("./routes/search/link.search"));

app.listen(PORT, () => {
  console.log(`Server running at port: ${PORT}`);
});
