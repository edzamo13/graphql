"use strict";

import mongodb from "mongodb";
import pkg from "dotenv";

const { MongoClient } = mongodb;
const { dotenv } = pkg.config();

const { DB_USER, DB_PASSWD, DB_HOST, DB_PORT, DB_NAME } = process.env;

const uri = `mongodb://${DB_USER}:${DB_PASSWD}@${DB_HOST}:${DB_PORT}/?authMechanism=DEFAULT`;
//const mongoUrl = `mongodb://${DB_USER}:${DB_PASSWD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`

// Create a new MongoClient
const client = new MongoClient(uri);
let connection;

async function run() {
  if (connection) return connection;
  let clientConnection;
  try {
    // Connect the client to the server (optional starting in v4.7)
    clientConnection = await client.connect();
    // Establish and verify connection
    // await connection.db("admin").command({ ping: 1 });
    connection = client.db(DB_NAME);
    console.log("Connected successfully to server!!");
  } finally {
    // Ensures that the client will close when you finish/error
   // await client.close();
  }

  return connection;
}
run().catch(console.dir);

export const connectDB = run;
