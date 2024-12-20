const express = require("express");

const router = express.Router();

router.get("/todos", (req, res) => {
  res.status(200).json({ message: "Get Request from /todos endpoint" });
});
router.post("/todos", (req, res) => {
  res.status(201).json({ message: "Post Request from /todos endpoint" });
});
router.delete("/todos/:id", (req, res) => {
  res
    .status(200)
    .json({ message: "Delete Request from /todos/customId endpoint" });
});
router.put("/todos/:id", (req, res) => {
  res
    .status(200)
    .json({ message: "Put Request from /todos/customId endpoint" });
});

module.exports = router;
