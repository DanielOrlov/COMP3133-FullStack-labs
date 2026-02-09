const express = require("express");
const restaurantModel = require("../models/Restaurant");

const router = express.Router();

router.get("/restaurants", async (req, res) => {
  try {
    const sortBy = req.query.sortBy;

    let query = restaurantModel.find(
      {},
      { _id: 1, cuisine: 1, name: 1, city: 1, restaurant_id: 1 },
    );

    if (sortBy === "ASC") {
      query = query.sort({ restaurant_id: 1 });
    } else if (sortBy === "DESC") {
      query = query.sort({ restaurant_id: -1 });
    }

    const restaurants = await query;
    res.status(200).json(restaurants);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get("/restaurants/cuisine/:cuisine", async (req, res) => {
  const cuisine = req.params.cuisine;

  try {
    const restaurants = await restaurantModel.find({ cuisine: cuisine });

    if (restaurants.length != 0) {
      res.status(200).json(restaurants);
    } else {
      res.send(JSON.stringify({ status: false, message: "No data found" }));
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get("/restaurants/Delicatessen", async (req, res) => {
  try {
    const restaurants = await restaurantModel
      .find(
        { cuisine: "Delicatessen", city: { $ne: "Brooklyn" } },
        { _id: 0, cuisine: 1, name: 1, city: 1 },
      )
      .sort({ name: 1 });

    res.status(200).json(restaurants);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
