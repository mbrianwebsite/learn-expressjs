const express = require("express");

const app = express();
app.use(express.json());

app.use("/todos", require("./api/todos"));

app.listen(3000, () => {
  console.log("Now Listening on port 3000");
});
