const mongoose = require('mongoose');

const emailRegEx = /^\S+@\S+\.\S+$/
const cityRegEx = /^[a-zA-Z\s]+$/
const zipRegEx = /^\d{5}-\d{4}$/
const webRegEx = /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/
const phoneRegEx = /^1-\d{3}-\d{3}-\d{4}$/

//Create Schema
const UserSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    username: {
        type: String,
    },
    email: {
        type: String,
    },
    address: {
        street: {
            type: String,
        },
        suite: {
            type: String,
        },
        city: {
            type: String,
        },
        zipcode: {
            type: String,
        },
        geo: {
            lat: {
                type: String,
            },
            lng: {
                type: String,
            }
        }
    },
    phone: {
        type: String,
    },
    website: {
        type: String,
    },
    company: {
        name: {
            type: String,
        },
        catchPhrase: {
            type: String,
        },
        bs: {
            type: String,
        }
    },
    createdAt: { 
        type: Date,
    },
    updatedAt: { 
        type: Date,
    },
  });

const User = mongoose.model("User", UserSchema);
module.exports = User;