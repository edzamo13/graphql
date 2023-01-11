"use strict";

import { connectDB } from "../db/db.js";
import { ObjectId } from "mongodb";
import { mutations } from "../resolvers/resolvers-mutation.js";
/*
const courses = [
  {
    _id: "1",
    title: "Mi titulo",
    teacher: "Mi profesor",
    description: "una descripcion",
    topic: "programcion",
  },
  {
    _id: "2",
    title: "Mi titulo 2",
    teacher: "Mi profesor",
    description: "una descripcion",
    topic: "programcion",
  },
  {
    _id: "3",
    title: "Mi titulo 3",
    teacher: "Mi profesor",
    description: "una descripcion",
    topic: "programcion",
  },
];*/

// Resolvers define how to fetch the types defined in your schema.
// This resolver retrieves books from the "books" array above.
export const resolvers = {
  Query: {
    getCourses: async () => {
      console.log("*****");
      let db;
      let data = [];
      try {
        console.log("in try");
        db = await connectDB();
        data = await db.collection("cursos").find().toArray();
        console.log("data!..", JSON.stringify(data));
      } catch (error) {
        console.error(error);
      }
      return data;
    },
    getCourse: async (root, { id }) => {
      console.log("*****");
      let db;
      let data;
      try {
        db = await connectDB();
        data = await db.collection("cursos").findOne({ _id: ObjectId(id) });
        console.log("data!..", JSON.stringify(data));
      } catch (error) {
        console.error(error);
      }
      return data;
    },
   
  },
  Mutation: mutations
};
