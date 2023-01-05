var express = require('express');
var { graphqlHTTP } = require('express-graphql');
var { buildSchema } = require('graphql');
const { readFileSync } = require('fs')
const { join } = require('path');
const resolvers = require('./schema/resolvers/resolvers');

// Construct a schema, using GraphQL schema language
var schema = buildSchema(
  readFileSync(
    join(__dirname, 'schema', 'schema.graphql'), 'utf-8'
  ));


var app = express();
app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: resolvers,
  graphiql: true,
}));
app.listen(4000);
console.log('Running a GraphQL API server at http://localhost:4000/graphql');