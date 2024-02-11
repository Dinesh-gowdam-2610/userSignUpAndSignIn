const express = require("express");
const cors = require("cors");
const router = require("./Routes/routes.js");
const dbConfig = require("./DBConfig/db");
const app = express();

app.use(cors({ origin: true }));
app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.get("/hello", (req, res) => {
  res.send("Hello World!");
});

app.use("/user", router);
app.use("/game", router);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
