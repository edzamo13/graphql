"use strict";

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
];

// Resolvers define how to fetch the types defined in your schema.
// This resolver retrieves books from the "books" array above.
export const resolvers = {
  Query: {
    getCourses: () => {
      return courses;
    },
    getCourse: (root, args) => {
      const course = courses.filter((course) => course._id === args.id);
      return course.pop();
    },
  },
};
