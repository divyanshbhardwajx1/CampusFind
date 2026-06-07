const express = require("express");
const router = express.Router();

const User = require("../models/User");

// REGISTER
router.post("/register", async (req, res) => {
  try {
    const { email } = req.body;

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({ error: "User already exists" });
    }

    // 🔥 Assign role
    let role = "user";
    if (email === "admin@gmail.com") {
      role = "admin";
    }

    const user = new User({
      ...req.body,
      role
    });

    await user.save();

    res.json({ message: "Registered successfully" });

  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
});


// LOGIN
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  console.log("LOGIN DATA:", email, password);

  const user = await User.findOne({ email });

  console.log("USER FOUND:", user);

  if (!user) {
    return res.status(400).json({ error: "Invalid email" });
  }

  // 🔥 IMPORTANT FIX
  if (user.password.trim() !== password.trim()) {
    return res.status(400).json({ error: "Invalid password" });
  }

  res.json({
    name: user.name,
    email: user.email,
    role: user.role
  });
});

module.exports = router;