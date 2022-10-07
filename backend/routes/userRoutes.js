const express = require("express");
const router = express.Router();
const {
  registerUser,
  loginUser,
  getMe,
} = require("../controllers/userController");

const { protect } = require("../middleware/authMiddleware");

// New User
router.post("/", registerUser);

// Login
router.post("/login", loginUser);
router.get("/me", protect, getMe);

module.exports = router;
