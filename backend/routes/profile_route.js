import express from "express";
import { Profile } from "../models/profile_model.js";

// const express = require('express');
const router = express.Router();

router.post("/profile", async (req, res) => {
  try {
    const profile = new Profile(req.body);
    await profile.save();
    res.status(201).json({ message: "Profile saved successfully!" });
  } catch (error) {
    console.error("Error saving profile:", error);
    res.status(500).json({ message: "Error saving profile." });
  }
});

export default router;
