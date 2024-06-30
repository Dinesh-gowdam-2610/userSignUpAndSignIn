// db.js
const mongoose = require("mongoose");

// Replace 'your_database_url' with your MongoDB connection string
const dbUrl = process.env.DB_URL;

mongoose.connect(dbUrl);

const db = mongoose.connection;

db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", () => {
  console.log("Connected to MongoDB !!!");
});

// Export the mongoose connection directly
module.exports = mongoose;
