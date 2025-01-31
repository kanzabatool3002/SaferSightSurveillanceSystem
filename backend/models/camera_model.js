import mongoose from "mongoose";

const CameraSchema = new mongoose.Schema({
  cameraName: { type: String, required: true },
  cameraLocation: { type: String, required: true },
  installationLocation: { type: String, required: true },
  ipAddress: { type: String, required: true, unique: true },
  cameraType: { type: String, required: true },
  resolution: { type: String, required: true },
  frameRate: { type: Number, required: true },
  userID: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
}, { timestamps: true });

export const Camera = mongoose.model("Camera", CameraSchema);









// import mongoose from "mongoose";

// const CameraSchema = new mongoose.Schema({
//   cameraName: { type: String, required: true },
//   cameraLocation: { type: String, required: true },
//   installationLocation: { type: String, required: true },
//   ipAddress: { type: String, required: true, unique: true },
//   cameraType: { type: String, required: true },
//   resolution: { type: String, required: true },
//   frameRate: { type: Number, required: true },
//   // userID: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true }, // Reference to User
// }, { timestamps: true });

// export const Camera = mongoose.model("Camera", CameraSchema);
