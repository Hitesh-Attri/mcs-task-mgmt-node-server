const express = require("express");
const Task = require("../models/Task");

const router = express.Router();

router.route("/:id").delete(async (req, res) => {
  // console.log(req.params.id, "sfd");

  const response = await Task.deleteOne({ _id: req.params.id });
  // console.log(resp);
  if (response.acknowledged) {
    res.json({ success: true, deletion: response });
  } else {
    res.json({ success: false, deletion: null });
  }
});

module.exports = router;
