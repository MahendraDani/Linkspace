require("dotenv").config();
const express = require("express");
const cors = require("cors");
const PORT = process.env.PORT;
const app = express();

// app.get("/home", (req, res) => {
//   res.send("Server is running!");
// });
app.use("/", require("./routes/index"));

app.listen(PORT, () => {
  console.log(`Server running at port: ${PORT}`);
});
