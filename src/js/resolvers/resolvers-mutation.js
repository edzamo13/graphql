"use strict";

import { connectDB } from "../db/db.js";
import { ObjectId } from "mongodb";

// Resolvers define how to fetch the types defined in your schema.
// This resolver retrieves books from the "books" array above.
export const mutations = {

  createCourse: async (root, {input}) => {
    console.log("************");

    const defaults = {
      teacher: "",
      topic: "",
    };

    const newCourse = Object.assign(defaults, input);
    let db;
    let course;
    try {
      db = await connectDB();
      course = await db.collection("cursos").insertOne(input);
      newCourse._id = course.insertedId;
    } catch (error) {
      console.error(error);
    }
    return newCourse;
  },
};
