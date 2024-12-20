const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send(200).json({ message: "First endpoint" });
});

const port = 5000;

app.listen(port, () => {
  console.log(`Server Running on Port: ${port}`);
});
