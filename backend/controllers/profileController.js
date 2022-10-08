const express = require("express");
const router = express.Router();
const {
  getProfile,
  createProfile,
} = require("../controllers/profileController");

const { protect } = require("../middleware/authMiddleware");

router.route("/").get(protect, getProfile).post(protect, createProfile);

module.exports = router;
