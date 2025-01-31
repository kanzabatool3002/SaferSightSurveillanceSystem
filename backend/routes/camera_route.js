

import express from 'express';
import { Camera } from "../models/camera_model.js";
import { Location } from "../models/location_model.js"
import authenticateUser from '.././middlewares/userAuthMiddleware.js';
const router = express.Router();

router.post('/add-camera', authenticateUser, async (req, res) => {
  const {
    cameraName,
    cameraLocation,
    installationLocation,
    ipAddress,
    cameraType,
    resolution,
    frameRate,
  } = req.body;

  try {
    const userID = req.user._id; // Get userID from the authenticated user
    console.log('User ID from Request:', userID); // Log the userID
    // Validate userID
    if (!userID) {
      return res.status(400).json({ error: 'User ID is required.' });
    }

    // Create a new camera
    const newCamera = new Camera({
      cameraName,
      cameraLocation,
      installationLocation,
      ipAddress,
      cameraType,
      resolution,
      frameRate,
      userID, // Include userID
    });

    await newCamera.save();

    // Check if location already exists
    const existingLocation = await Location.findOne({ locationName: cameraLocation });

    if (existingLocation) {
      existingLocation.numberOfCameras += 1;
      await existingLocation.save();
    } else {
      // Create a new location
      const newLocation = new Location({
        locationName: cameraLocation,
        description: `Added by camera: ${cameraName}`,
        numberOfCameras: 1, // Initialize with 1
      });

      await newLocation.save();
    }

    res.status(200).json({ message: 'Camera added successfully!' });
  } catch (error) {
    console.error('Error adding camera:', error.message);

    if (error.name === 'ValidationError') {
      return res.status(400).json({ error: 'Invalid input data.', details: error.message });
    }

    if (error.code === 11000) { // Handle duplicate IP address
      return res.status(400).json({ error: 'IP address already exists.' });
    }

    res.status(500).json({ error: 'Failed to add camera.' });
  }
});

router.get('/cameras', authenticateUser, async (req, res) => {
  try {
    // Fetch cameras that belong to the authenticated user
    const cameras = await Camera.find({ userID: req.user._id });

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
