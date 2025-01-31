
import express from "express";
const router = express.Router();
import { Location } from "../models/location_model.js";


// Add a new location
router.post('/add-location', async (req, res) => {
  try {
    const { locationName, numberOfCameras } = req.body;

    if (!locationName || !numberOfCameras) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    const newLocation = new Location({
      locationName,
      numberOfCameras,
    });

    await newLocation.save();
    res.status(201).json({ message: 'Location added successfully', location: newLocation });
  } catch (error) {
    res.status(500).json({ error: 'Failed to add location' });
  }
});

// Get all locations
router.get('/locations', async (req, res) => {
  try {
    const locations = await Location.find();
    res.status(200).json(locations);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch locations' });
  }
});
export default router;
