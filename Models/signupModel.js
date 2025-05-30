const mongoose = require("mongoose");

// Define the User schema
const userSchema = new mongoose.Schema({
  _id: {
    type: String,
  },
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      "Please enter a valid email",
    ],
    description: "must be a email address",
  },
  phoneNumber: {
    type: String, // ✅ Change to String
    required: true,
    unique: true,
    validate: {
      validator: function (value) {
        return /^\d{10}$/.test(value); // ✅ Ensure exactly 10 digits
      },
      message: "Phone number must be exactly 10 digits",
    },
  },
  newPassword: {
    type: String,
    required: true,
    validate: {
      validator: function (value) {
        return /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]+$/.test(
          value
        );
      },
      message:
        "Password must contain at least one uppercase letter, one number, and one or more special characters",
    },
  },
  reEnterPassword: {
    type: String,
    required: true,
  },
  token: {
    type: String,
  },
  cartAdded: {
    type: Array,
    default: [],
  },
});

// Create and export the User model
const Signup = mongoose.model("Signup", userSchema);
module.exports = Signup;
