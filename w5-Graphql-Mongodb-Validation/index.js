const express = require("express");
const mongoose = require("mongoose");

//GraphQL related imports
const { buildSchema } = require("graphql");
const { graphqlHTTP } = require("express-graphql");

//Models
const UserModel = require("./model/User");
const MovieModel = require("./model/Movie");
const User = require("./model/User");

const app = express();
const PORT = 4000;

//Schema
const gqlSchema = buildSchema(`

    type User{
        _id: ID
        uid: Int
        firstname: String!
        lastname: String!
        salary: Float
    }


    type Query{
        hello: String
        greet(name: String!): String
        users: [User]
        user(uid: Int!): User
    }

    type Mutation{
        createUser(uid: Int!, firstname: String!, lastname:String!, salary: Float): User
        updateUser(uid: Int!, firstname: String!, lastname:String!, salary: Float): User
        deleteUser(_id: ID!): User
    }
        

    `);

//Resolver
const rootResolver = {
  hello: () => {
    return "Hello World";
  },
  greet: (args) => {
    return `Welcome ${args.name}`;
  },
  users: async () => {
    try {
      const users = await UserModel.find();
      return users;
    } catch (error) {
      console.log(`Error while fetching users: ${error}`);
      return [];
    }
  },
  user: async (args) => {
    try {
      const users = await UserModel.findOne({ uid: args.uid });
      return users;
    } catch (error) {
      console.log(`Error while fetching user: ${error}`);
      return null;
    }
  },
  createUser: async (args) => {
    try {
      const newUser = new UserModel({
        uid: args.uid,
        firstname: args.firstname,
        lastname: args.lastname,
        salary: args.salary,
      });
      const savedUser = await newUser.save();
      return savedUser;
    } catch (error) {
      console.log(`Error while creating user: ${error.message}`);
      return null;
    }
  },
  updateUser: async (args) => {
    try {
      const updateUser = await UserModel.findOneAndUpdate(
        { uid: args.uid },
        {
          $set: {
            firstname: args.firstname,
            lastname: args.lastname,
            salary: args.salary,
          },
        },
        { new: true },
      );
      return updateUser;
    } catch (error) {
      console.log(`Error while updating user: ${error.message}`);
      return null;
    }
  },
  deleteUser: async (args) => {
    try {
      const deleteUser = await UserModel.findByIdAndDelete(args._id);
      return deleteUser;
    } catch (error) {
      console.log(`Error while deleting user : ${error.message}`);
      return null;
    }
  },
};

//Create express graphql
const graphqlHttp = graphqlHTTP({
  schema: gqlSchema,
  rootValue: rootResolver,
  graphiql: true,
});

//Add graphqlHttp to express middleware
app.use("/graphql", graphqlHttp);

//helper function to connect to MongoDB asychronously
const connectDB = async () => {
  try {
    console.log(`Attempting to connect to DB`);
    //TODO - Replace you Connection String here
    const DB_NAME = "db_comp3133_employee";
    const DB_USER_NAME = "admin";
    const DB_PASSWORD = "!password123";
    const CLUSTER_ID = "kv0ijv9";
    const DB_CONNECTION = `mongodb+srv://${DB_USER_NAME}:${DB_PASSWORD}@cluster0.${CLUSTER_ID}.mongodb.net/${DB_NAME}?retryWrites=true&w=majority&appName=Cluster0`;

    mongoose
      .connect(DB_CONNECTION)
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

app.listen(PORT, () => {
  connectDB();
  console.log("GraphQL Server started");
  console.log("http://localhost:4000/graphql");
});
