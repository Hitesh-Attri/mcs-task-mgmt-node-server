const express = require("express");
const Task = require("../models/Task");

const router = express.Router();

router.route("/").get(async (req, res) => {
  const data = await Task.find();
  if (data) {
    res.json({ success: true, tasks: data });
  } else {
    res.json({ success: false, tasks: null });
  }
});

module.exports = router;
