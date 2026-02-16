const express = require("express");
const userModel = require("../models/User");

const router = express.Router();

router.get("/users", async (req, res) => {
  try {
    const users = await userModel.find();
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.post("/users", async (req, res) => {
  try {
    const newUser = await userModel.create(req.body);
    res.status(201).json(newUser);
  } catch (err) {
    // Mongoose validation errors (regex, required, minlength, etc.)
    if (err.name === "ValidationError") {
      return res.status(400).json({
        error: "Validation failed",
        details: Object.values(err.errors).map((e) => e.message),
      });
    }

    // Duplicate key error (unique email)
    if (err.code === 11000) {
      return res.status(409).json({
        error: "Duplicate key",
        details: `Email already exists: ${err.keyValue?.email}`,
      });
    }

    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
