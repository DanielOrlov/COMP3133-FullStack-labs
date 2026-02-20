const express = require("express");
const app = express();
const mongoose = require("mongoose");
const userRoutes = require("./routes/UserRoutes.js");

const PORT = process.env.PORT || 8081;

// Middleware to parse JSON and URL-encoded data
app.use(express.json()); // For parsing JSON
app.use(express.urlencoded({ extended: true })); // For parsing URL-encoded data from forms

const DB_NAME = "comp3133-labs";
const DB_USER_NAME = "admin";
const DB_PASSWORD = "!password123";
const CLUSTER_ID = "kv0ijv9";
const DB_CONNECTION = `mongodb+srv://${DB_USER_NAME}:${DB_PASSWORD}@cluster0.${CLUSTER_ID}.mongodb.net/${DB_NAME}?retryWrites=true&w=majority&appName=Cluster0`;

//helper function to connect to MongoDB asychronously
const connectDB = async () => {
  try {
    console.log(`Attempting to connect to DB`);

    mongoose
      .connect(DB_CONNECTION, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then(() => {
        console.log(`MongoDB connected`);
      })
      .catch((err) => {
        console.log(
          `Error while connecting to MongoDB : ${JSON.stringify(err)}`,
        );
      });
  } catch (error) {
    console.log(`Unable to connect to DB : ${error.message}`);
  }
};

const onServerStart = () => {
  console.log(`The server started running at http://localhost:${PORT}`);
  console.log(`Press Ctrl+c to stop`);

  //connect to database
  connectDB();
};

app.use(userRoutes);

app.listen(PORT, onServerStart);
