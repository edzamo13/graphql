'use strict'

const { graphql, buildSchema } = require('graphql')


//schema definition 

const schema = buildSchema(`
  type Query {
    hello: String
  }
`)
//perform the query Hello

graphql(schema, '{ hello }').then((data) => {
  console.log(data)
})

