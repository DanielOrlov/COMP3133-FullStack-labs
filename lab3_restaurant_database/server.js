const express = require("express");
const mongoose = require("mongoose");
const restaurantRouter = require("./routes/restaurants.js");
const SERVER_PORT = process.env.PORT || 3000;

const app = express();
app.use(express.json());

app.use("/", restaurantRouter);

const DB_NAME = "comp3133-labs";
const DB_USER_NAME = "admin";
const DB_PASSWORD = "!password123";
const CLUSTER_ID = "kv0ijv9";
const DB_CONNECTION = `mongodb+srv://${DB_USER_NAME}:${DB_PASSWORD}@cluster0.${CLUSTER_ID}.mongodb.net/${DB_NAME}?retryWrites=true&w=majority&appName=Cluster0`;

// const DB_NAME = "";
// const DB_USER_NAME = "";
// const DB_PASSWORD = "";
// const CLUSTER_ID = "";
// const DB_CONNECTION = `mongodb+srv://${DB_USER_NAME}:${DB_PASSWORD}@cluster0.${CLUSTER_ID}.mongodb.net/${DB_NAME}?retryWrites=true&w=majority&appName=Cluster0`;

async function connectToMongoDB(connectionString = DB_CONNECTION) {
  await mongoose.connect(connectionString);
}

app.listen(SERVER_PORT, () => {
  console.log("Server is running...");
  try {
    connectToMongoDB(DB_CONNECTION);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
});
