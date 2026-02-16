const mongoose = require("mongoose");
const validator = require("validator");

const UserSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    username: {
      type: String,
      required: true,
      minlength: 4,
      maxlength: 100,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      match: [
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        "Please provide a valid email address",
      ],
    },
    address: {
      street: { type: String, required: true },
      suite: { type: String },
      city: {
        type: String,
        required: true,
        match: [/^[A-Za-z\s]+$/, "City can only contain letters and spaces"],
      },
      zipcode: {
        type: String,
        required: true,
        match: [
          /^\d{5}-\d{4}$/,
          "Zip code can only contain numbers and follow the format DDDD-DDDD",
        ],
      },
      geo: {
        lat: { type: String, required: true },
        lng: { type: String, required: true },
      },
    },
    phone: {
      type: String,
      required: true,
      match: [
        /^\d{1}-\d{3}-\d{3}-\d{4}$/,
        "Phone number must follow the format 1-123-123-1234",
      ],
    },
    website: {
      type: String,
      required: true,
      trim: true,
      validate: {
        validator: function (v) {
          return validator.isURL(v, {
            protocols: ["http", "https"],
            require_protocol: true,
          });
        },
        message: "Website must be a valid url",
      },
    },
    company: {
      name: { type: String, required: true },
      catchPhrase: { type: String, required: true },
      bs: { type: String, required: true },
    },
  },
  {
    collection: "users",
  },
);

module.exports = mongoose.model("User", UserSchema);
