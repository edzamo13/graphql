'use strict'

import { MongoClient } from ('mongo')
const {
  DB_USER,
  DB_PASSWD,
  DB_HOST,
  DB_PORT,
  DB_NAME
} = process.env

const mongoUrl = `mongodb://${DB_USER}:${DB_PASSWD}@${DB_HOST}:${DB_PORT}/?authMechanism=DEFAULT`
//const mongoUrl = `mongodb://${DB_USER}:${DB_PASSWD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`
//mongodb://mongoadmin:admin@localhost:27017/?authMechanism=DEFAULT

let connection

export async function connectDB () {
  if (connection) return connection

  let client
  try {
    client = await MongoClient.connect(mongoUrl, {
      useNewUrlParser: true
    })
    connection = client.db(DB_NAME)
  } catch (error) {
    console.error('Could not connect to db', mongoUrl, error)
    process.exit(1)
  }

  return connection
}

//module.exports = connectDB