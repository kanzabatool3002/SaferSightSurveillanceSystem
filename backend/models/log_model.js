

// import mongoose from 'mongoose';

// // Define the schema for the logs
// const logSchema = new mongoose.Schema({
//   detectionType: String,
//   date: String,
//   time: String,
//   isRead: Boolean,
//   createdAt: Date,
//   videoPath: String,
// });

// // Create a model based on the schema
// const Log = mongoose.model('Log', logSchema);

// export { Log };








// import mongoose from "mongoose";

// // Define the schema for logged data
// const logSchema = new mongoose.Schema({
//     videoPath: {
//         type: String,
//         required: true,
//         trim: true // Removes extra spaces
//     },
//     detectionType: {
//         type: String,
//         required: true,
//         enum: ['snatching', 'fighting'], // Optional: restrict to known detection types
//         trim: true
//     },
//     date: {
//         type: String, // Use String if storing dates in ISO format
//         required: true
//     },
//     time: {
//         type: String, // Use String to store time separately
//         required: true
//     },
//     createdAt: {
//         type: Date,
//         default: Date.now // Automatically add the creation timestamp
//     },
//     isRead:{
//         type: String,
//         required:true
//     }
// });

// // Export the model
// // module.exports = mongoose.model('Log', logSchema);
// export const Log = mongoose.model("Log", logSchema);















// const mongoose = require('mongoose');

// import mongoose from "mongoose";
// // Define Schema
// const logSchema = new mongoose.Schema({
//   videoPath: { type: String, required: true },
//   detectionType: { type: String, required: true },
//   date: { type: String, required: true },
//   time: { type: String, required: true },
//   isRead: { type: Boolean, default: false },
//   createdAt: {type: Date, default: Date.now}
// });

// // // Export Model
// // module.exports = mongoose.model('Log', logSchema);


// // Export the model
// // module.exports = mongoose.model('Log', logSchema);
// export const Log = mongoose.model("Log", logSchema);











// import mongoose from 'mongoose';

// // Define the schema for the logs
// const logSchema = new mongoose.Schema({
//   detectionType: String,
//   date: String,
//   time: String,
//   isRead: Boolean,
//   videoPath: String,
// });

// // Create a model based on the schema
// const Log = mongoose.model('Log', logSchema);

// export { Log };




















import mongoose from "mongoose";

// Define the schema for logged data
const logSchema = new mongoose.Schema({
    videoPath: {
        type: String,
        required: true,
        trim: true // Removes extra spaces
    },
    detectionType: {
        type: String,
        required: true,
        enum: ['snatching', 'fighting'], // Optional: restrict to known detection types
        trim: true
    },
    date: {
        type: String, // Use String if storing dates in ISO format
        required: true
    },
    time: {
        type: String, // Use String to store time separately
        required: true
    },
    // userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    isRead: { type: Boolean, default: false },
    createdAt: {
        type: Date,
        default: Date.now // Automatically add the creation timestamp
    }
});

// Export the model
// module.exports = mongoose.model('Log', logSchema);
export const Log = mongoose.model("Log", logSchema);
