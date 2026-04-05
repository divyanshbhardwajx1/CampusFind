const mongoose = require("mongoose");

const ItemSchema = new mongoose.Schema({
  type: String,
  name: String,
  category: String,
  description: String,
  location: String,
  date: String,
  image: String,
  userEmail: String,
  status: { type: String, default: "active" },
  claimedBy: String
});

module.exports = mongoose.model("Item", ItemSchema);