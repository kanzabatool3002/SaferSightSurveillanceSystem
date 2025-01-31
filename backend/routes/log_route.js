import express from "express";
import { Log } from "../models/log_model.js";
import mongoose from "mongoose";
import authenticateUser from '.././middlewares/userAuthMiddleware.js';

const router = express.Router();

// POST route to log data to MongoDB
router.post('/log', async (req, res) => {
  const { videoPath, detectionType, date, time,userId } = req.body;

  // Validate input
  if (!videoPath || !detectionType || !date || !time || !userId) {
    return res.status(400).json({ error: "Invalid data received" });
  }

  try {
    // Create a new log entry
    const logEntry = new Log({
      videoPath,
      detectionType,
      date,
      time,
      userId,
      isRead: false,
    });

    // Save the entry to MongoDB
    await logEntry.save();

    res.status(200).json({ message: "Logged successfully" });
  } catch (err) {
    console.error('Failed to log data', err);
    res.status(500).json({ error: 'Failed to log data' });
  }
});


router.get('/video', async (req, res) => {
  try {
      // Log the headers to verify the Authorization token is being received
      console.log('Request Headers:', req.headers);

      // Extract the token from the Authorization header
      const token = req.headers.authorization?.split(' ')[1]; // Extract the token after 'Bearer'
      console.log('Received Token:', token);

      // Check if the token is provided
      if (!token) {
          return res.status(401).json({ error: 'Authorization token is missing' });
      }

      // Convert the token to an ObjectId
      const userId = new mongoose.Types.ObjectId(token);
      console.log(userId)
      // Use the userId to query the database
      const videos = await Log.find({ userId: userId });

      // Respond with the filtered videos
      res.status(200).json(videos);
  } catch (err) {
      console.error('Failed to fetch videos', err);
      res.status(500).json({ error: 'Failed to fetch videos' });
  }
});


router.get('/videos', authenticateUser, async (req, res) => {
  try {
    const userId = req.user._id; // Extract the userId from the authenticated user
    const videos = await Log.find({ userId }); // Fetch videos associated with the userId
    res.status(200).json(videos);
  } catch (err) {
    console.error('Failed to fetch videos', err);
    res.status(500).json({ error: 'Failed to fetch videos' });
  }
});


router.get('/cameras', authenticateUser, async (req, res) => {
  try {
    // Fetch cameras that belong to the authenticated user
    const cameras = await Camera.find({ userId: req.user._id });

    // Check if no cameras were found
    if (cameras.length === 0) {
      return res.status(404).json({ message: 'No cameras found for this user' });
    }

    res.status(200).json(cameras); // Return the list of cameras for the authenticated user
  } catch (error) {
    console.error('Error fetching cameras:', error);
    res.status(500).json({ message: 'Error fetching cameras', error: error.message });
  }
});



export default router;
