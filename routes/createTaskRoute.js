const express = require("express");
const Task = require("../models/Task");

const router = express.Router();

router.route("/").post(async (req, res) => {
  let obj = req.body;
  obj = new Task(obj);

  let save = await obj.save();

  if (save) {
    res.json({ success: true, task: obj });
  } else {
    res.json({ success: false, task: null });
  }
});

module.exports = router;
