const express = require("express");
const app = express();
const router = require("./routes");

app.use("/api", router);
app.get("/", (req, res) => {
  res.send(200).json({ message: "First endpoint" });
});

const port = 5000;

app.listen(port, () => {
  console.log(`Server Running on Port: ${port}`);
});
