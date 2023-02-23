const express = require("express");
const req = require("express/lib/request");

const app = express();

const todos = [];

app.get("/todos", (req, res) => {
  return res.json(todos);
});

app.listen(3000, () => {
  console.log("Now Listening on port 3000");
});
