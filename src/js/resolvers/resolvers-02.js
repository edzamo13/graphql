"use strict";

const courses = [
  {
    _id: "1",
    title: "title",
    teacher: "teacher",
    description: "description",
    topic: "topic",
  },
  {
    _id: "2",
    title: "title",
    teacher: "teacher",
    description: "description",
    topic: "topic",
  },
  {
    _id: "3",
    title: "title",
    teacher: "teacher",
    description: "description",
    topic: "topic",
  },
];
// The root provides a resolver function for each API endpoint
module.exports = {
    getCourses: () => {
    return courses;
  },
};
