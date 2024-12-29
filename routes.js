const express = require("express");
const router = express.Router();

// Mock dashboard data
router.get("/", (req, res) => {
  res.json({
    visitors: 580,
    orders: 1080,
    earnings: 350000,
    satisfaction: 4.0,
  });
});

module.exports = router;
