const express = require("express");
const Task = require("../models/Task");

const router = express.Router();

router.route("/:id").put(async (req, res) => {
  let task = await Task.findOne({ _id: req.params.id });
  if (task) {
    task.title = req.body.title;
    task.description = req.body.description;

    const save = await task.save();

    if (save) {
      res.json({ success: true, task: save });
    } else {
      res.json({ success: false, task: null });
    }
  } else {
    res.json({ success: false, task: null });
  }
});

module.exports = router;
