const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    message: "GitHub Explorer API is running"
  });
});

module.exports = router;