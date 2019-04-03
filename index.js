const express = require("express");
//3decebb3e72a4936b88ec9b4b3c3168a
const app = express();

app.get("/", (req, res) => {
  res.json({ data: "OK" });
});

app.listen(3003, () => {
  console.log("app running ...");
});
