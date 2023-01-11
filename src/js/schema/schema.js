export const typeDefs = `#graphql
  # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.

  # This "Course" type defines the queryable fields for every book in our data source.
type Course {
  _id: ID!
  title: String!
  teacher: String
  description: String!
  topic: String
}

input CourseInput {
  title: String!
  teacher: String
  description: String!
  topic: String
}

type Student {
  _id: ID!
  name: String!
  email: String!
}

  # The "Query" type is special: it lists all of the available queries that
  # clients can execute, along with the return type for each. In this
  # case, the "books" query returns an array of zero or more Books (defined above).
  type Query {
  "Devuelve todos cursos"
  getCourses: [Course]
  "Devuelve un curso"
  getCourse(id: ID!): Course
  "Devuelve todos estudiantes"
  getStudents: [Student]
  "Devuelve un estudiante"
  getStudent(id: ID!): Student
}


type Mutation{
  "Create Course"
        createCourse(input: CourseInput!): Course!

    }

`;
