// location_model.js
// const mongoose = require('mongoose');
import mongoose from "mongoose";

const locationSchema = new mongoose.Schema({
  locationName: { type: String, required: true },
  numberOfCameras: { type: Number},
});

// const Location = mongoose.model('Location', locationSchema);

// module.exports = Location;

export const Location = mongoose.model("Location", locationSchema);