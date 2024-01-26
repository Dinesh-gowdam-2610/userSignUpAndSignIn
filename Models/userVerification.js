const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Define the User schema
const userVerificationSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
    ref: "user",
  },
  token: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    expires: 3600,
  },
});

// Create and export the User model
const userVerification = mongoose.model(
  "userVerification",
  userVerificationSchema
);
module.exports = userVerification;
