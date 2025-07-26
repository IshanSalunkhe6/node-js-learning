const mongoose = require("mongoose");

// Define the URL schema
const urlSchema = new mongoose.Schema(
  {
    shortId: {
      type: String,
      required: true,
      unique: true,
    },
    redirectURL: {
      type: String,
      required: true,
    },
    visitHistory: [
      {
        timestamp: { type: Number },
      },
    ],
  },
  { timestamps: true } 
);

// Create the model
const URL = mongoose.model("url", urlSchema);

// Export the model
module.exports = URL;
