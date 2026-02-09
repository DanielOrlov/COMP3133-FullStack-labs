const mongoose = require("mongoose");

const RestaurantSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    cuisine: { type: String, required: true },
    city: { type: String, required: true },
    restaurant_id: { type: Number, required: true, index: true },
  },
  {
    collection: "restaurants",
  },
);

module.exports = mongoose.model("Restaurant", RestaurantSchema);
