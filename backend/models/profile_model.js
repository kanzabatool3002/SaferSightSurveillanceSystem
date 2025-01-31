import mongoose from "mongoose";

const profileSchema = new mongoose.Schema({
    organizationName: { type: String, required: true },
    phone: { type: String },
    organizationlocation: { type: String },
    userlocation: { type: String },
    organizationNumber: { type: String },
    organizationDetails: { type: String, required: true },
    name: { type: String, required: true },
    email: { type: String, required: true },
  });

// Export the model
export const Profile = mongoose.model("Profile", profileSchema);
