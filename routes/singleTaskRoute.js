const express = require("express");
const Task = require("../models/Task");

const router = express.Router();

router.route("/:id").get(async (req, res) => {
  const task = await Task.findOne({ _id: req.params.id });
  if (task) {
    res.json({ success: true, task: task });
  } else {
    res.json({ success: false, task: null });
  }
});

module.exports = router;
